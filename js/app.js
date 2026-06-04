/* ==========================================================================
   VÉRTICE EHS - CAPACITACIÓN INTEGRAL
   MAIN APP ORCHESTRATOR & EVENT BINDINGS (app.js)
   ========================================================================== */

let comparisonChart = null;

const app = {
  init() {
    // Initialize storage and routing
    participantManager.init();
    navigation.init();

    // Setup dark/light theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeBtn.innerHTML = isLight ? '🌙' : '☀️';
        localStorage.setItem('ehs_theme_light', isLight);
        this.showToast({ type: 'info', message: `Tema cambiado a modo ${isLight ? 'Claro' : 'Oscuro'}` });
      });

      // Restore theme preference
      if (localStorage.getItem('ehs_theme_light') === 'true') {
        document.body.classList.add('light-theme');
        themeBtn.innerHTML = '🌙';
      }
    }

    // Auto-save note fields on blur
    document.querySelectorAll('.fac-notes-area').forEach(textarea => {
      textarea.addEventListener('blur', (e) => {
        const id = e.target.dataset.participant;
        participantManager.updateParticipantProfile(id, { notas_facilitador: e.target.value });
        this.showToast({ type: 'success', message: 'Notas actualizadas automáticamente' });
      });
    });

    // Initial render
    this.render();

    // Auto-sync database changes every 10 seconds in the background
    setInterval(() => {
      participantManager.syncWithExamDatabase();
      this.render();
    }, 10000);
  },

  render() {
    const participants = participantManager.getParticipants();

    // 1. Render Dashboard cards & progress bars
    participants.forEach((p, idx) => {
      const num = idx + 1;
      
      // Update names on Dashboard UI
      const nameEl = document.getElementById(`dash-p${num}-name`);
      if (nameEl) nameEl.textContent = p.nombre || `Ingeniero ${num}`;

      // Update progress metrics
      const progressPercent = participantManager.calcularProgresoGeneral(p.id);
      
      const barFill = document.getElementById(`dash-p${num}-progress-fill`);
      if (barFill) barFill.style.width = progressPercent + '%';

      const textPercent = document.getElementById(`dash-p${num}-progress-text`);
      if (textPercent) textPercent.textContent = progressPercent + '%';

      // Ring indicators for Course Completion
      const dia1Circle = document.getElementById(`dash-p${num}-dia1-ring`);
      if (dia1Circle) {
        // Circumference is 2 * PI * r = 2 * 3.14159 * 54 = 339.292
        const offset = 339.292 - (p.dia1_progreso / 100) * 339.292;
        dia1Circle.style.strokeDashoffset = offset;
      }
      const dia2Circle = document.getElementById(`dash-p${num}-dia2-ring`);
      if (dia2Circle) {
        const offset = 339.292 - (p.dia2_progreso / 100) * 339.292;
        dia2Circle.style.strokeDashoffset = offset;
      }

      // Fill in small labels
      const d1Text = document.getElementById(`dash-p${num}-dia1-pct`);
      if (d1Text) d1Text.textContent = `${p.dia1_progreso}%`;

      const d2Text = document.getElementById(`dash-p${num}-dia2-pct`);
      if (d2Text) d2Text.textContent = `${p.dia2_progreso}%`;

      // Exam Status tag on dashboard
      const examTag = document.getElementById(`dash-p${num}-exam-tag`);
      if (examTag) {
        if (p.examen_pendiente) {
          examTag.className = 'badge status-pending';
          examTag.textContent = 'Pendiente';
        } else {
          const passText = p.examen_aprobado ? 'Aprobado' : 'Reprobado';
          examTag.className = p.examen_aprobado ? 'badge status-success' : 'badge status-blocked';
          examTag.textContent = `${passText} (${p.examen_score}%)`;
        }
      }

      // Update reset panel names
      const resetNameEl = document.getElementById(`reset-p${num}-name`);
      if (resetNameEl) resetNameEl.textContent = p.nombre || `Ingeniero ${num}`;
    });

    // Update Console Active Engineer Select
    const consoleSelect = document.getElementById('console-active-engineer-select');
    if (consoleSelect) {
      const selectedValue = consoleSelect.value;
      consoleSelect.innerHTML = '';
      participants.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.nombre || p.id;
        if (p.id === selectedValue) option.selected = true;
        consoleSelect.appendChild(option);
      });
      // Fallback if previous selection is no longer valid
      if (!consoleSelect.value && participants.length > 0) {
        consoleSelect.value = participants[0].id;
      }
    }

    // 2. Render Participants tab grid
    this.renderParticipantsTab();

    // 3. Render Admin Panel exam controls
    this.renderAdminExamTab();

    // 4. Render reports charts
    this.renderReportsTab();
  },

  // Generates tables & input cards for each engineer
  renderParticipantsTab() {
    const listContainer = document.getElementById('participants-list-container');
    if (!listContainer) return;

    // Do not re-render and wipe inputs if user is currently typing
    if (listContainer.contains(document.activeElement)) return;

    const participants = participantManager.getParticipants();
    listContainer.innerHTML = '';

    participants.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'glass-card hover-glow';
      card.style.padding = '28px';

      const progressVal = participantManager.calcularProgresoGeneral(p.id);

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3 style="font-size: 1.6rem; color: var(--color-accent-light);"><span style="vertical-align: middle; margin-right: 8px;"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span> ${p.nombre}</h3>
          <span class="badge ${progressVal === 100 ? 'status-success' : 'status-progress'}" style="font-size: 0.85rem; padding: 6px 12px;">
            ${progressVal === 100 ? 'COMPLETADO' : 'EN CURSO'}
          </span>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" class="form-control participant-input-name" data-id="${p.id}" value="${p.nombre}">
          </div>
          <div class="form-group">
            <label>Correo Electrónico</label>
            <input type="email" class="form-control participant-input-email" data-id="${p.id}" value="${p.email}">
          </div>
        </div>

        <div class="grid-3" style="margin-top: 14px; margin-bottom: 20px; text-align: center;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--color-border); padding: 12px; border-radius: 8px;">
            <div style="font-family: var(--font-cond); font-weight: 800; font-size: 1.3rem; color: var(--color-success);">${p.dia1_progreso}%</div>
            <div style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">Día 1: Alturas</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--color-border); padding: 12px; border-radius: 8px;">
            <div style="font-family: var(--font-cond); font-weight: 800; font-size: 1.3rem; color: var(--color-info);">${p.dia2_progreso}%</div>
            <div style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">Día 2: Supervisor</div>
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--color-border); padding: 12px; border-radius: 8px;">
            <div style="font-family: var(--font-cond); font-weight: 800; font-size: 1.3rem; color: var(--color-accent-light);">${p.examen_pendiente ? '---' : p.examen_score + '%'}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-secondary); text-transform: uppercase;">Examen Final</div>
          </div>
        </div>

        <div class="form-group">
          <label>Notas de Observación del Facilitador</label>
          <textarea class="form-control participant-input-notes" data-id="${p.id}" rows="3" placeholder="Ingresar notas técnicas y de desempeño en dinámicas...">${p.notas_facilitador}</textarea>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 12px;">
          <button class="btn btn-primary btn-save-profile" data-id="${p.id}" style="width: auto;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Guardar Cambios
          </button>
        </div>
      `;

      listContainer.appendChild(card);
    });

    // Bind event listeners for profile updates
    listContainer.querySelectorAll('.btn-save-profile').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.id;
        const cardParent = btn.closest('.glass-card');
        const nameVal = cardParent.querySelector('.participant-input-name').value.trim();
        const emailVal = cardParent.querySelector('.participant-input-email').value.trim();
        const notesVal = cardParent.querySelector('.participant-input-notes').value.trim();

        if (!nameVal) {
          this.showToast({ type: 'error', message: 'El nombre no puede estar vacío' });
          return;
        }

        participantManager.updateParticipantProfile(id, {
          nombre: nameVal,
          email: emailVal,
          notas_facilitador: notesVal
        });

        this.showToast({ type: 'success', message: `Perfil de ${nameVal} guardado con éxito` });
        
        // Remove focus so renderParticipantsTab updates the UI
        if (document.activeElement) document.activeElement.blur();
        
        this.render();
      });
    });
  },

  // Generates tables of finished exams and preselection configs
  renderAdminExamTab() {
    const listTable = document.getElementById('admin-exam-records-body');
    if (!listTable) return;

    try {
      const rawDb = localStorage.getItem('ehs_exam_database') || "[]";
      const examDb = JSON.parse(rawDb).sort((a, b) => new Date(b.examDate) - new Date(a.examDate));

      listTable.innerHTML = '';

      if (examDb.length === 0) {
        listTable.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--color-text-secondary)">No hay registros de exámenes realizados todavía.</td></tr>`;
        return;
      }

      examDb.forEach(record => {
        const tr = document.createElement('tr');
        const formattedDate = new Date(record.examDate).toLocaleString();
        const scoreClass = record.score >= 70 ? 'color: var(--color-success)' : 'color: var(--color-error)';
        const minutes = Math.floor(record.totalTimeSeconds / 60);
        const seconds = record.totalTimeSeconds % 60;
        
        tr.innerHTML = `
          <td><strong>${record.participantName || record.participantId}</strong></td>
          <td>${formattedDate}</td>
          <td style="${scoreClass}; font-weight: 800; font-family: var(--font-mono)">${record.score}%</td>
          <td><span class="badge ${record.aprobado ? 'status-success' : 'status-blocked'}">${record.aprobado ? 'Aprobado' : 'Reprobado'}</span></td>
          <td>${minutes}m ${seconds}s</td>
          <td>${record.warningsCount} desvíos</td>
        `;
        listTable.appendChild(tr);
      });
    } catch (e) {
      console.error("Error loading exam table:", e);
    }
  },

  // Generates reports, Chart.js bars, and comparative indicators
  renderReportsTab() {
    const ctx = document.getElementById('comparisonChartCanvas');
    if (!ctx) return;

    const participants = participantManager.getParticipants();
    
    // Labels for dynamics and grades
    const labels = [
      'Asistencia Día 1',
      'Asistencia Día 2',
      'Riesgos (M1)',
      'EPP (M1)',
      'Arnés (M1)',
      'Investigación (M2)',
      'Liderazgo (M2)',
      'Rol-Play (M2)',
      'Examen Final'
    ];

    const datasets = participants.map((p, idx) => {
      const borderColors = ['#ff6b35', '#3aaf6d'];
      const bgColors = ['rgba(255, 107, 53, 0.2)', 'rgba(58, 175, 109, 0.2)'];

      return {
        label: p.nombre || `Ingeniero ${idx+1}`,
        data: [
          p.dia1_progreso,
          p.dia2_progreso,
          p.simulador_riesgos_score,
          p.dinamica_epp_score,
          p.simulador_arnes_score,
          p.dinamica_investigacion_score,
          p.dinamica_liderazgo_score,
          p.rol_play_supervisor_score,
          p.examen_pendiente ? 0 : p.examen_score
        ],
        backgroundColor: bgColors[idx % 2],
        borderColor: borderColors[idx % 2],
        borderWidth: 2,
        borderRadius: 4
      };
    });

    if (comparisonChart) {
      comparisonChart.destroy();
    }

    try {
      comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: { labels, datasets },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              grid: {
                color: 'rgba(255,255,255,0.05)'
              },
              ticks: {
                color: '#8fa3bc',
                font: {
                  family: 'Barlow'
                }
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: '#8fa3bc',
                font: {
                  family: 'Barlow Condensed',
                  size: 12,
                  weight: 'bold'
                }
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#f0f4f8',
                font: {
                  family: 'Barlow Condensed',
                  size: 14,
                  weight: 'bold'
                }
              }
            }
          }
        }
      });
    } catch (e) {
      console.warn("Chart.js failed to initialize:", e);
    }
  },

  // Facilitator operations
  openLauncherModal(modulo, url) {
    const frame = document.getElementById('launcher-iframe');
    const title = document.getElementById('launcher-modal-title');
    
    if (frame && title) {
      // Map names to spanish labels
      const nameMap = {
        'riesgos': 'Dinámica 1: Identificación de Riesgos',
        'epp': 'Dinámica 2: Selección de EPP',
        'arnes': 'Dinámica 3: Inspección de Arnés',
        'investigacion': 'Dinámica 4: Investigación de Incidentes (Ishikawa)',
        'liderazgo': 'Dinámica 5: Liderazgo Operativo (Autorizar/Detener)',
        'rolplay': 'Dinámica 6: Role-play de Supervisión'
      };

      title.textContent = nameMap[modulo] || 'Dinámica Interactiva';
      
      // Select the engineer currently active in the facilitator console, to bind score output
      const selectedId = document.getElementById('console-active-engineer-select').value;
      
      // Inject query parameters to allow dynamics to communicate score back to storage
      frame.src = `${url}?participantId=${selectedId}&moduleKey=${modulo}`;
      navigation.openModal('modal-launcher');
    }
  },

  // Genera el enlace standalone para WhatsApp y lo copia al portapapeles
  copyStandaloneLink(path) {
    const selectedId = document.getElementById('console-active-engineer-select').value;
    const origin = window.location.origin;
    const pathname = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    const fullUrl = `${origin}${pathname}${path}?participantId=${selectedId}`;
    
    navigator.clipboard.writeText(fullUrl).then(() => {
      this.showToast({ type: 'success', message: '¡Enlace directo copiado al portapapeles!' });
    }).catch(err => {
      console.error('Error copiando al portapapeles: ', err);
      prompt("Su navegador no soporta copiado automático. Copie este enlace manualmente:", fullUrl);
    });
  },

  // Toast System
  showToast({ type = 'info', message = '', duration = 4000 }) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
      'success': '✅',
      'error': '❌',
      'info': 'ℹ️',
      'warning': '⚠️'
    };

    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.25rem;">${iconMap[type] || '🔔'}</span>
        <span>${message}</span>
      </div>
      <button class="toast-close">✕</button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.style.animation = 'slideOutRight 0.3s ease both';
      setTimeout(() => toast.remove(), 300);
    });

    // Auto-destroy toast
    setTimeout(() => {
      if (toast.parentNode) {
        toast.style.animation = 'slideOutRight 0.3s ease both';
        setTimeout(() => toast.remove(), 300);
      }
    }, duration);
  },

  // Set exam duration parameter
  setExamTimeLimit(minutes) {
    localStorage.setItem('ehs_exam_duration_config', parseInt(minutes) || 30);
    this.showToast({ type: 'success', message: `Duración de examen configurada en ${minutes} minutos` });
  },

  // Clear exam scores for a single engineer
  resetExamScore(participantId) {
    if (confirm('¿Está seguro de reiniciar el examen para este ingeniero? Se borrarán sus resultados anteriores.')) {
      participantManager.resetExamForParticipant(participantId);
      this.showToast({ type: 'warning', message: 'Examen restablecido. El participante puede tomarlo de nuevo.' });
      this.render();
    }
  },

  // Decode and import a shared exam result record from base64 string
  importExamCode() {
    const input = document.getElementById('import-exam-code-input');
    if (!input || !input.value.trim()) {
      this.showToast({ type: 'warning', message: 'Por favor, ingrese un código de examen válido.' });
      return;
    }

    const code = input.value.trim();
    try {
      const decoded = decodeURIComponent(escape(atob(code)));
      const record = JSON.parse(decoded);

      if (!record.id || !record.participantId || typeof record.score !== 'number') {
        throw new Error('Formato de código inválido.');
      }

      const rawDb = localStorage.getItem('ehs_exam_database') || "[]";
      const db = JSON.parse(rawDb);

      if (db.some(r => r.id === record.id)) {
        this.showToast({ type: 'info', message: 'Este resultado de examen ya estaba registrado en el Hub.' });
        input.value = '';
        return;
      }

      db.push(record);
      localStorage.setItem('ehs_exam_database', JSON.stringify(db));

      participantManager.syncWithExamDatabase();
      this.render();

      this.showToast({ type: 'success', message: '¡Examen importado y sincronizado con éxito!' });
      input.value = '';
    } catch (e) {
      console.error('Error importing exam:', e);
      this.showToast({ type: 'error', message: 'El código de examen ingresado no es válido o está dañado.' });
    }
  },

  // Resets the entire hub storage database to defaults
  resetEntireHub() {
    if (confirm('⚠ ADVERTENCIA CRÍTICA: ¿Está seguro de reiniciar TODO el programa de capacitación? Se borrarán registros de asistencia, calificaciones de dinámicas y base de datos de exámenes.')) {
      participantManager.resetAll();
      localStorage.removeItem('ehs_exam_database'); // clear exams database
      localStorage.removeItem('ehs_exam_state'); // clear mid-exam state
      this.showToast({ type: 'error', message: 'Capacitación reiniciada por completo' });
      this.render();
    }
  }
};

// Start Orchestrator
window.addEventListener('DOMContentLoaded', () => {
  window.app = app;
  app.init();
});
