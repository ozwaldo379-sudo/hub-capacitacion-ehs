/* ==========================================================================
   VÉRTICE EHS - CAPACITACIÓN INTEGRAL
   LOCALSTORAGE PERSISTENCE & SYNC (storage.js)
   ========================================================================== */

const STORAGE_KEY = 'ehs_training_state';
const EXAM_DB_KEY = 'ehs_exam_database';

const DEFAULT_STATE = {
  participants: [
    {
      id: 'ING-001',
      nombre: 'Carlos Mendoza',
      email: 'carlos.mendoza@verticeehs.com',
      dia1_completado: false,
      dia1_progreso: 0,
      dia2_completado: false,
      dia2_progreso: 0,
      simulador_riesgos_score: 0,
      dinamica_epp_score: 0,
      simulador_arnes_score: 0,
      dinamica_investigacion_score: 0,
      dinamica_liderazgo_score: 0,
      rol_play_supervisor_score: 0,
      examen_pendiente: true,
      examen_score: null,
      examen_aprobado: null,
      notas_facilitador: ''
    },
    {
      id: 'ING-002',
      nombre: 'Andrea Ruiz',
      email: 'andrea.ruiz@verticeehs.com',
      dia1_completado: false,
      dia1_progreso: 0,
      dia2_completado: false,
      dia2_progreso: 0,
      simulador_riesgos_score: 0,
      dinamica_epp_score: 0,
      simulador_arnes_score: 0,
      dinamica_investigacion_score: 0,
      dinamica_liderazgo_score: 0,
      rol_play_supervisor_score: 0,
      examen_pendiente: true,
      examen_score: null,
      examen_aprobado: null,
      notas_facilitador: ''
    }
  ]
};

const participantManager = {
  state: null,

  // Initialize and load state
  init() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        this.state = JSON.parse(raw);
        // Ensure structure is correct
        if (!this.state.participants || this.state.participants.length === 0) {
          this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
      } else {
        this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        this.save();
      }
      this.syncWithExamDatabase();
    } catch (e) {
      console.error("Error initializing storage:", e);
      this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  },

  // Save active state to localStorage
  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Error saving state:", e);
    }
  },

  // Reset all state to defaults
  resetAll() {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.save();
  },

  // Get list of participants
  getParticipants() {
    return this.state.participants;
  },

  // Get single participant by ID
  getParticipant(id) {
    return this.state.participants.find(p => p.id === id);
  },

  // Register participant profile changes
  updateParticipantProfile(id, data) {
    const p = this.getParticipant(id);
    if (p) {
      if (data.nombre) p.nombre = data.nombre;
      if (data.email) p.email = data.email;
      if (data.notas_facilitador !== undefined) p.notas_facilitador = data.notas_facilitador;
      this.save();
    }
  },

  // Register slide attendance / completion
  registrarAsistencia(id, dia, completado, progresoPercent) {
    const p = this.getParticipant(id);
    if (p) {
      if (dia === 1) {
        p.dia1_completado = completado;
        p.dia1_progreso = progresoPercent;
      } else if (dia === 2) {
        p.dia2_completado = completado;
        p.dia2_progreso = progresoPercent;
      }
      this.save();
    }
  },

  // Update game score for a dynamic
  actualizarProgreso(id, modulo, porcentaje) {
    const p = this.getParticipant(id);
    if (p) {
      // Map modulo parameter to the correct state property
      const fieldMap = {
        'riesgos': 'simulador_riesgos_score',
        'epp': 'dinamica_epp_score',
        'arnes': 'simulador_arnes_score',
        'investigacion': 'dinamica_investigacion_score',
        'liderazgo': 'dinamica_liderazgo_score',
        'rolplay': 'rol_play_supervisor_score'
      };
      
      const field = fieldMap[modulo];
      if (field) {
        p[field] = parseInt(porcentaje) || 0;
        this.save();
      }
    }
  },

  // Pull records from the adaptive exam database and link scores to our engineers
  syncWithExamDatabase() {
    try {
      const rawDb = localStorage.getItem(EXAM_DB_KEY) || "[]";
      const examDb = JSON.parse(rawDb);
      
      let hasChanges = false;

      this.state.participants.forEach(p => {
        // Find most recent completed exam for this participant by matching ID
        const match = examDb
          .filter(record => record.participantId === p.id)
          .sort((a, b) => new Date(b.examDate) - new Date(a.examDate))[0];

        if (match) {
          p.examen_score = match.score;
          p.examen_aprobado = match.aprobado;
          p.examen_pendiente = false;
          hasChanges = true;
        } else {
          // If no record found but we have locally synced exam state, check if we need to reset
          if (!p.examen_pendiente && p.examen_score !== null) {
            p.examen_pendiente = true;
            p.examen_score = null;
            p.examen_aprobado = null;
            hasChanges = true;
          }
        }
      });

      if (hasChanges) {
        this.save();
      }
    } catch (e) {
      console.error("Error syncing exam database:", e);
    }
  },

  // Clear a single engineer's exam record so they can retake it
  resetExamForParticipant(id) {
    const p = this.getParticipant(id);
    if (p) {
      try {
        // Remove exam records matching participant's ID from exam db
        const rawDb = localStorage.getItem(EXAM_DB_KEY) || "[]";
        let examDb = JSON.parse(rawDb);
        examDb = examDb.filter(record => record.participantId !== p.id);
        localStorage.setItem(EXAM_DB_KEY, JSON.stringify(examDb));

        p.examen_score = null;
        p.examen_aprobado = null;
        p.examen_pendiente = true;
        this.save();
      } catch (e) {
        console.error("Error resetting exam:", e);
      }
    }
  },

  // Calculate global program progress percentage for an engineer
  calcularProgresoGeneral(id) {
    const p = this.getParticipant(id);
    if (!p) return 0;
    
    // Components weights:
    // Day 1 Course: 20%
    // Day 2 Course: 20%
    // 3 Alturas Dynamics: 15% (5% each)
    // 3 Supervisor Dynamics: 15% (5% each)
    // Final Exam: 30%
    
    const progress = 
      ((p.dia1_progreso / 100) * 20) + 
      ((p.dia2_progreso / 100) * 20) + 
      ((p.simulador_riesgos_score / 100) * 5) + 
      ((p.dinamica_epp_score / 100) * 5) + 
      ((p.simulador_arnes_score / 100) * 5) + 
      ((p.dinamica_investigacion_score / 100) * 5) + 
      ((p.dinamica_liderazgo_score / 100) * 5) + 
      ((p.rol_play_supervisor_score / 100) * 5) + 
      (p.examen_pendiente ? 0 : ((p.examen_score / 100) * 30));
      
    return Math.round(progress);
  }
};
