/**
 * MOTOR DE EVALUACIÓN ADAPTATIVA (engine.js)
 * Vértice EHS · 2026
 * 
 * Este archivo gestiona el estado lógico del examen, la selección inteligente de preguntas,
 * el control de tiempos (límite general e individual por pregunta), las rachas de nivel,
 * el sistema de persistencia (auto-save) y los controles de seguridad contra copias y desvíos.
 */

// ==================== ESTADO GLOBAL DEL EXAMEN ====================
const examEngine = {
  // Estado de ejecución
  state: {
    activeEngineer: "",
    simulatorScore: 0,
    currentQuestion: null,
    currentQuestionIndex: 0,
    targetQuestionsCount: 25, // Adaptativo inicial 25 (rango 20-35)
    nivelActual: "medio", // facil | medio | dificil | experto
    
    // Historial y métricas
    historialRespuestas: [], // { questionId, cat, module, difficulty, correct, userAns, timeSpent }
    preguntasRealizadas: [], // IDs de preguntas presentadas
    aciertosPorModulo: {}, // { modulo_key: { total: X, correct: Y } }
    dificultadHistorial: ["medio"], // Trayectoria de niveles
    flaggedForReview: [], // IDs de preguntas marcadas
    
    // Streaks para ajuste
    streakCorrectas: 0,
    streakIncorrectas: 0,
    
    // Tiempos
    timeLeft: 30 * 60, // 30 minutos generales (en segundos)
    questionTimeLeft: 60, // Tiempo para la pregunta activa
    questionTimeMax: 60, // Límite máximo de la pregunta actual
    
    // Seguridad y comportamiento
    warningsCount: 0,
    isExamActive: false,
    startTime: null,
    endTime: null,
    
    // Modo aprendizaje post-examen
    reviewModeActive: false,
    reviewQuestions: [], // Preguntas falladas para repasar
    reviewCurrentIndex: 0,
    reviewHistorial: [] // Registro de repaso
  },

  // Configuración de límites por nivel de dificultad
  timeLimits: {
    facil: 45,    // segundos
    medio: 60,
    dificil: 90,
    experto: 120
  },

  // Pesos de puntos para cálculo adaptativo
  weights: {
    facil: 1,
    medio: 2,
    dificil: 3,
    experto: 4
  },

  // ==================== INICIALIZACIÓN Y FLUJO PRINCIPAL ====================
  
  /**
   * Inicializa un examen desde cero basado en el perfil del participante
   */
  startNewExam(engineerId, engineerName, simulatorScoreVal) {
    const score = parseInt(simulatorScoreVal) || 0;
    this.state = {
      activeEngineer: engineerName,
      participantId: engineerId,
      simulatorScore: score,
      currentQuestion: null,
      currentQuestionIndex: 0,
      targetQuestionsCount: 25,
      nivelActual: this.calculateInitialLevel(score),
      
      historialRespuestas: [],
      preguntasRealizadas: [],
      aciertosPorModulo: {},
      dificultadHistorial: [],
      flaggedForReview: [],
      
      streakCorrectas: 0,
      streakIncorrectas: 0,
      
      timeLeft: 30 * 60,
      questionTimeLeft: 60,
      questionTimeMax: 60,
      
      warningsCount: 0,
      isExamActive: true,
      startTime: Date.now(),
      endTime: null,
      
      reviewModeActive: false,
      reviewQuestions: [],
      reviewCurrentIndex: 0,
      reviewHistorial: []
    };

    // Añadir el nivel inicial al historial de trayectoria
    this.state.dificultadHistorial.push(this.state.nivelActual);

    // Inicializar contadores de aciertos por módulo
    const db = window.examQuestions || {};
    const cursos = ["trabajoAlturas", "supervisorEHS"];
    cursos.forEach(curso => {
      if (db[curso]) {
        Object.keys(db[curso]).forEach(modulo => {
          this.state.aciertosPorModulo[modulo] = { total: 0, correct: 0 };
        });
      }
    });

    this.saveToLocalStorage();
    this.startTimers();
    this.loadNextQuestion();
  },

  /**
   * Calcula el nivel de dificultad inicial según el puntaje del simulador
   */
  calculateInitialLevel(score) {
    if (score >= 90) return "experto";
    if (score >= 75) return "dificil";
    if (score >= 60) return "medio";
    return "facil";
  },

  // ==================== SELECCIÓN ADAPTATIVA DE PREGUNTAS ====================
  
  /**
   * Selecciona de forma inteligente y ponderada la siguiente pregunta óptima
   */
  seleccionarPreguntaOptima(cursoActivo) {
    const db = window.examQuestions || {};
    if (!db[cursoActivo]) return null;

    const modulos = Object.keys(db[cursoActivo]);
    
    // 1. Identificar módulos débiles del participante en el curso activo (porcentaje acierto < 60% con al menos 2 preguntas hechas)
    const modulosDebiles = modulos.filter(mod => {
      const stats = this.state.aciertosPorModulo[mod];
      return stats && stats.total >= 2 && (stats.correct / stats.total) < 0.6;
    });

    // 2. Determinar el módulo prioritario a evaluar (balancear la distribución)
    let moduloSeleccionado = null;
    let minRealizadas = Infinity;

    // Si hay áreas débiles detectadas, priorizarlas primero
    const modulosAExaminar = modulosDebiles.length > 0 ? modulosDebiles : modulos;

    modulosAExaminar.forEach(mod => {
      const count = this.state.historialRespuestas.filter(r => r.module === mod && r.cat === cursoActivo).length;
      if (count < minRealizadas) {
        minRealizadas = count;
        moduloSeleccionado = mod;
      }
    });

    if (!moduloSeleccionado) {
      moduloSeleccionado = modulos[0];
    }

    // 3. Intentar obtener candidatos del módulo seleccionado en el nivel de dificultad actual
    let candidates = db[cursoActivo][moduloSeleccionado].filter(q => 
      q.difficulty === this.state.nivelActual && !this.state.preguntasRealizadas.includes(q.id)
    );

    // 4. Si no hay preguntas en la dificultad actual, buscar en niveles adyacentes del mismo módulo
    if (candidates.length === 0) {
      // Orden de búsqueda de proximidad
      const nivelesAlternativos = this.getAdjacentLevels(this.state.nivelActual);
      for (let level of nivelesAlternativos) {
        candidates = db[cursoActivo][moduloSeleccionado].filter(q => 
          q.difficulty === level && !this.state.preguntasRealizadas.includes(q.id)
        );
        if (candidates.length > 0) break;
      }
    }

    // 5. Si aún no hay preguntas en este módulo, buscar en cualquier otro módulo del curso activo que tenga preguntas
    if (candidates.length === 0) {
      for (let mod of modulos) {
        candidates = db[cursoActivo][mod].filter(q => 
          !this.state.preguntasRealizadas.includes(q.id)
        );
        if (candidates.length > 0) {
          moduloSeleccionado = mod;
          break;
        }
      }
    }

    // 6. Si todavía no hay preguntas en el curso activo, buscar en el otro curso
    if (candidates.length === 0) {
      const otroCurso = cursoActivo === "trabajoAlturas" ? "supervisorEHS" : "trabajoAlturas";
      if (db[otroCurso]) {
        const otrosModulos = Object.keys(db[otroCurso]);
        for (let mod of otrosModulos) {
          candidates = db[otroCurso][mod].filter(q => 
            !this.state.preguntasRealizadas.includes(q.id)
          );
          if (candidates.length > 0) {
            moduloSeleccionado = mod;
            cursoActivo = otroCurso;
            break;
          }
        }
      }
    }

    // Si no hay absolutamente ninguna pregunta disponible (fin de banco)
    if (candidates.length === 0) return null;

    // Seleccionar una pregunta aleatoria de los candidatos disponibles
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const selectedQuestion = JSON.parse(JSON.stringify(candidates[randomIndex])); // Clonación profunda para evitar mutaciones
    
    // Inyectar etiquetas de contexto operativo temporal
    selectedQuestion.cat = cursoActivo;
    selectedQuestion.moduleName = moduloSeleccionado;

    return selectedQuestion;
  },

  /**
   * Retorna una lista de niveles de dificultad ordenados por cercanía al nivel actual
   */
  getAdjacentLevels(level) {
    if (level === "facil") return ["medio", "dificil", "experto"];
    if (level === "medio") return ["dificil", "facil", "experto"];
    if (level === "dificil") return ["experto", "medio", "facil"];
    return ["dificil", "medio", "facil"]; // experto
  },

  // ==================== LÓGICA DE ACTUALIZACIÓN DE DIFICULTAD Y STREAKS ====================

  /**
   * Calcula el siguiente nivel de dificultad basado en aciertos y errores
   */
  calcularNivelSiguiente(isCorrect) {
    const niveles = ["facil", "medio", "dificil", "experto"];
    let idx = niveles.indexOf(this.state.nivelActual);
    let levelChanged = false;
    let direction = ""; // "up" o "down"

    if (isCorrect) {
      this.state.streakCorrectas++;
      this.state.streakIncorrectas = 0;
      
      // Subir nivel tras 3 aciertos seguidos
      if (this.state.streakCorrectas >= 3) {
        if (idx < niveles.length - 1) {
          idx++;
          this.state.nivelActual = niveles[idx];
          levelChanged = true;
          direction = "up";
        }
        this.state.streakCorrectas = 0; // Reset racha
      }
    } else {
      this.state.streakIncorrectas++;
      this.state.streakCorrectas = 0;
      
      // Bajar nivel tras 2 desaciertos seguidos
      if (this.state.streakIncorrectas >= 2) {
        if (idx > 0) {
          idx--;
          this.state.nivelActual = niveles[idx];
          levelChanged = true;
          direction = "down";
        }
        this.state.streakIncorrectas = 0; // Reset racha
      }
    }

    this.state.dificultadHistorial.push(this.state.nivelActual);

    // Desencadenar callback visual de cambio de nivel si el frontend lo tiene registrado
    if (levelChanged && typeof window.onLevelChange === "function") {
      window.onLevelChange(this.state.nivelActual, direction);
    }
  },

  /**
   * Adapta de forma dinámica la longitud total de preguntas del examen
   */
  adaptExamLength() {
    const totalRespuestas = this.state.historialRespuestas.length;
    
    // La adaptación se evalúa a partir de la pregunta 20
    if (totalRespuestas >= 20) {
      const correctas = this.state.historialRespuestas.filter(r => r.correct).length;
      const accuracyRate = correctas / totalRespuestas;

      // 1. Salida temprana por excelencia (Dominio Sobresaliente)
      if (accuracyRate >= 0.90 && this.state.nivelActual === "experto") {
        this.state.targetQuestionsCount = Math.min(this.state.targetQuestionsCount, totalRespuestas);
      } 
      // 2. Extensión por zona gris/limítrofe (Requiere mayor precisión de datos)
      else if (accuracyRate >= 0.65 && accuracyRate <= 0.75) {
        this.state.targetQuestionsCount = 35; // Extender a máximo 35
      } 
      // 3. Casos comunes
      else {
        this.state.targetQuestionsCount = 25;
      }
    }
  },

  // ==================== CONTROL DE FLUJO DE PREGUNTAS ====================

  /**
   * Carga la siguiente pregunta adaptativa en el estado del motor
   */
  loadNextQuestion() {
    // Alternar categorías de cursos de forma equitativa (50/50)
    let cursoActivo = "trabajoAlturas";
    if (this.state.currentQuestionIndex % 2 !== 0) {
      cursoActivo = "supervisorEHS";
    }

    let q = this.seleccionarPreguntaOptima(cursoActivo);
    
    // Si no hay preguntas en la categoría preferida, intentar en la otra
    if (!q) {
      const otroCurso = cursoActivo === "trabajoAlturas" ? "supervisorEHS" : "trabajoAlturas";
      q = this.seleccionarPreguntaOptima(otroCurso);
    }

    // Verificar si se ha alcanzado el límite adaptativo de preguntas o si no hay más preguntas disponibles
    if (!q || this.state.currentQuestionIndex >= this.state.targetQuestionsCount) {
      this.finishExam();
      return;
    }

    // Actualizar pregunta activa
    this.state.currentQuestion = q;
    this.state.preguntasRealizadas.push(q.id);
    
    // Configurar tiempo individual para esta pregunta
    const limit = this.timeLimits[q.difficulty] || 60;
    this.state.questionTimeMax = limit;
    this.state.questionTimeLeft = limit;

    // Guardar estado e informar a la interfaz
    this.saveToLocalStorage();
    if (typeof window.renderQuestionUI === "function") {
      window.renderQuestionUI(q, this.state.currentQuestionIndex, this.state.targetQuestionsCount);
    }
  },

  /**
   * Registra y valida la respuesta del participante frente a la pregunta actual
   */
  submitAnswer(userAns) {
    const q = this.state.currentQuestion;
    if (!q) return;

    let isCorrect = false;

    // Calcular el tiempo transcurrido en responder esta pregunta
    const timeSpent = this.state.questionTimeMax - this.state.questionTimeLeft;

    // Validación según tipo de interfaz
    if (q.type === "orden") {
      // userAns es un array de índices ordenados por el usuario
      isCorrect = JSON.stringify(userAns) === JSON.stringify(q.correctOrder);
    } else {
      // userAns es un índice numérico
      isCorrect = parseInt(userAns) === q.answer;
    }

    // Registrar en el historial de respuestas
    this.state.historialRespuestas.push({
      questionId: q.id,
      cat: q.cat,
      module: q.moduleName,
      difficulty: q.difficulty,
      correct: isCorrect,
      userAns: Array.isArray(userAns) ? [...userAns] : userAns,
      timeSpent: timeSpent
    });

    // Actualizar contadores del módulo
    if (this.state.aciertosPorModulo[q.moduleName]) {
      this.state.aciertosPorModulo[q.moduleName].total++;
      if (isCorrect) {
        this.state.aciertosPorModulo[q.moduleName].correct++;
      }
    }

    // Calcular nivel siguiente y evaluar longitud adaptativa del test
    this.calcularNivelSiguiente(isCorrect);
    this.adaptExamLength();

    // Guardar progreso
    this.saveToLocalStorage();

    // Devolver resultado detallado para animaciones de feedback
    return {
      isCorrect: isCorrect,
      feedbackText: q.feedback,
      reference: q.reference,
      correctAnswer: q.type === "orden" ? q.correctOrder : q.answer
    };
  },

  /**
   * Avanza al participante a la siguiente fase o pregunta
   */
  nextStep() {
    this.state.currentQuestionIndex++;
    this.loadNextQuestion();
  },

  /**
   * Alterna la bandera de revisión en la pregunta actual
   */
  toggleFlagCurrentQuestion() {
    const q = this.state.currentQuestion;
    if (!q) return false;

    const idx = this.state.flaggedForReview.indexOf(q.id);
    if (idx === -1) {
      this.state.flaggedForReview.push(q.id);
      this.saveToLocalStorage();
      return true; // Marcado
    } else {
      this.state.flaggedForReview.splice(idx, 1);
      this.saveToLocalStorage();
      return false; // Desmarcado
    }
  },

  // ==================== TEMPORIZADORES Y TIEMPOS ====================
  
  timerInterval: null,

  startTimers() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      if (!this.state.isExamActive) {
        clearInterval(this.timerInterval);
        return;
      }

      // 1. Decrementar tiempo total del examen
      this.state.timeLeft--;
      if (this.state.timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.finishExam();
        return;
      }

      // 2. Decrementar tiempo de la pregunta activa
      if (!this.state.reviewModeActive) {
        this.state.questionTimeLeft--;
        if (this.state.questionTimeLeft <= 0) {
          // El tiempo expiró. Auto-confirmar como errónea
          if (typeof window.onQuestionTimeOut === "function") {
            window.onQuestionTimeOut();
          }
        }
      }

      // Enviar actualización visual a la interfaz cada segundo
      if (typeof window.updateTimersUI === "function") {
        window.updateTimersUI(this.state.timeLeft, this.state.questionTimeLeft, this.state.questionTimeMax);
      }
    }, 1000);
  },

  stopTimers() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  // ==================== FINALIZACIÓN DEL EXAMEN ====================
  
  /**
   * Concluye la prueba, detiene relojes, compila estadísticas y limpia almacenamiento temporal
   */
  finishExam() {
    this.state.isExamActive = false;
    this.state.endTime = Date.now();
    this.stopTimers();
    
    // Calcular puntaje final ponderado por pesos de dificultad
    let totalPuntosTeoricosMax = 0;
    let puntosObtenidos = 0;

    this.state.historialRespuestas.forEach(ans => {
      const peso = this.weights[ans.difficulty] || 2;
      totalPuntosTeoricosMax += peso;
      if (ans.correct) {
        puntosObtenidos += peso;
      }
    });

    const scorePct = totalPuntosTeoricosMax > 0 ? Math.round((puntosObtenidos / totalPuntosTeoricosMax) * 100) : 0;
    const aprobado = scorePct >= 70;

    // Guardar en base de datos local permanente de resultados
    this.saveResultToDatabase(scorePct, aprobado);

    // Limpiar estado de reanudación temporal de localStorage
    localStorage.removeItem("ehs_exam_state");

    // Invocar render de resultados finales
    if (typeof window.showResultsUI === "function") {
      window.showResultsUI(scorePct, aprobado, puntosObtenidos, totalPuntosTeoricosMax);
    }
  },

  // ==================== MODO APRENDIZAJE (REPASO DE ERRORES) ====================
  
  /**
   * Inicia el modo de repaso de las preguntas falladas
   */
  startReviewMode() {
    const db = window.examQuestions || {};
    const falladas = this.state.historialRespuestas.filter(r => !r.correct).map(r => r.questionId);
    
    // Obtener objetos de preguntas completos desde el banco de datos
    this.state.reviewQuestions = [];
    const cursos = ["trabajoAlturas", "supervisorEHS"];
    
    cursos.forEach(c => {
      if (db[c]) {
        Object.keys(db[c]).forEach(m => {
          db[c][m].forEach(q => {
            if (falladas.includes(q.id)) {
              // Copiar y agregar metadata
              const clone = JSON.parse(JSON.stringify(q));
              clone.cat = c;
              clone.moduleName = m;
              this.state.reviewQuestions.push(clone);
            }
          });
        });
      }
    });

    if (this.state.reviewQuestions.length === 0) {
      alert("¡Increíble! No tuviste respuestas incorrectas para repasar.");
      return;
    }

    this.state.reviewModeActive = true;
    this.state.reviewCurrentIndex = 0;
    this.state.reviewHistorial = [];
    this.loadNextReviewQuestion();
  },

  loadNextReviewQuestion() {
    if (this.state.reviewCurrentIndex >= this.state.reviewQuestions.length) {
      // Terminó el repaso
      this.state.reviewModeActive = false;
      if (typeof window.showResultsUI === "function") {
        // Volver a renderizar pantalla de resultados para mantener estado limpio
        this.finishExam(); 
      }
      return;
    }

    const q = this.state.reviewQuestions[this.state.reviewCurrentIndex];
    if (typeof window.renderQuestionUI === "function") {
      window.renderQuestionUI(q, this.state.reviewCurrentIndex, this.state.reviewQuestions.length, true);
    }
  },

  submitReviewAnswer(userAns) {
    const q = this.state.reviewQuestions[this.state.reviewCurrentIndex];
    if (!q) return;

    let isCorrect = false;
    if (q.type === "orden") {
      isCorrect = JSON.stringify(userAns) === JSON.stringify(q.correctOrder);
    } else {
      isCorrect = parseInt(userAns) === q.answer;
    }

    this.state.reviewHistorial.push({
      questionId: q.id,
      correct: isCorrect
    });

    return {
      isCorrect: isCorrect,
      feedbackText: q.feedback,
      reference: q.reference,
      correctAnswer: q.type === "orden" ? q.correctOrder : q.answer
    };
  },

  nextReviewStep() {
    this.state.reviewCurrentIndex++;
    this.loadNextReviewQuestion();
  },

  // ==================== PERSISTENCIA Y AUTO-SAVE ====================
  
  saveToLocalStorage() {
    try {
      localStorage.setItem("ehs_exam_state", JSON.stringify(this.state));
    } catch (e) {
      console.warn("No se pudo escribir en localStorage:", e);
    }
  },

  checkResumeState() {
    try {
      const data = localStorage.getItem("ehs_exam_state");
      if (data) {
        const saved = JSON.parse(data);
        // Validar si el examen guardado estaba activo
        if (saved && saved.isExamActive) {
          return saved;
        }
      }
    } catch (e) {
      console.error("Error leyendo estado para reanudar:", e);
    }
    return null;
  },

  resumeExam(savedState) {
    this.state = savedState;
    // Reiniciar y recalcular el tiempo transcurrido mientras estuvo cerrado
    this.startTimers();
    // Forzar render del estado recuperado
    if (this.state.currentQuestion) {
      updateHeaderMonitorUI();
      if (typeof window.renderQuestionUI === "function") {
        window.renderQuestionUI(this.state.currentQuestion, this.state.currentQuestionIndex, this.state.targetQuestionsCount);
      }
    } else {
      this.loadNextQuestion();
    }
  },

  /**
   * Guarda los resultados acumulados de forma permanente en la base de datos de localStorage
   */
  saveResultToDatabase(score, aprobado) {
    try {
      const rawDb = localStorage.getItem("ehs_exam_database") || "[]";
      const db = JSON.parse(rawDb);
      
      const newRecord = {
        id: "exam_" + Date.now(),
        participantId: this.state.participantId || this.state.activeEngineer,
        participantName: this.state.activeEngineer,
        examDate: new Date().toISOString(),
        totalTimeSeconds: Math.round((Date.now() - this.state.startTime) / 1000),
        averageTimePerQuestion: this.calculateAverageTime(),
        score: score,
        aprobado: aprobado,
        difficultyPath: [...this.state.dificultadHistorial],
        areasWeak: this.detectWeakAreas(),
        areasStrong: this.detectStrongAreas(),
        warningsCount: this.state.warningsCount,
        flagForReview: [...this.state.flaggedForReview],
        historialRespuestas: this.state.historialRespuestas.map(r => ({
          questionId: r.questionId,
          correct: r.correct,
          module: r.module,
          difficulty: r.difficulty
        }))
      };

      db.push(newRecord);
      localStorage.setItem("ehs_exam_database", JSON.stringify(db));
    } catch (e) {
      console.error("Error guardando record en base de datos:", e);
    }
  },

  calculateAverageTime() {
    const count = this.state.historialRespuestas.length;
    if (count === 0) return 0;
    const total = this.state.historialRespuestas.reduce((acc, r) => acc + r.timeSpent, 0);
    return Math.round(total / count);
  },

  detectWeakAreas() {
    const list = [];
    Object.keys(this.state.aciertosPorModulo).forEach(mod => {
      const stats = this.state.aciertosPorModulo[mod];
      if (stats.total > 0 && (stats.correct / stats.total) < 0.7) {
        list.push(mod);
      }
    });
    return list;
  },

  detectStrongAreas() {
    const list = [];
    Object.keys(this.state.aciertosPorModulo).forEach(mod => {
      const stats = this.state.aciertosPorModulo[mod];
      if (stats.total > 0 && (stats.correct / stats.total) >= 0.7) {
        list.push(mod);
      }
    });
    return list;
  },

  // ==================== SEGURIDAD Y CONTROL CONTRA FRAUDES ====================
  
  registerWarning() {
    if (!this.state.isExamActive || this.state.reviewModeActive) return;
    this.state.warningsCount++;
    this.saveToLocalStorage();

    if (typeof window.onSecurityWarning === "function") {
      window.onSecurityWarning(this.state.warningsCount);
    }
  },

  initSecurityListeners() {
    // 1. Bloquear clic derecho (context menu)
    document.addEventListener("contextmenu", e => {
      if (this.state.isExamActive) {
        e.preventDefault();
      }
    });

    // 2. Bloquear combinaciones de copia y pegado
    document.addEventListener("keydown", e => {
      if (!this.state.isExamActive) return;
      
      const copyKeys = (e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "C" || e.key === "v" || e.key === "V" || e.key === "x" || e.key === "X");
      const devTools = (e.key === "F12" || (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j")));
      
      if (copyKeys || devTools) {
        e.preventDefault();
        alert("🔒 Acción bloqueada por políticas de seguridad del examen.");
      }
    });

    // 3. Detectar desvíos de pestaña (blur)
    window.addEventListener("blur", () => {
      this.registerWarning();
    });
  }
};

// Iniciar escuchas de seguridad al cargar el script
document.addEventListener("DOMContentLoaded", () => {
  examEngine.initSecurityListeners();
});
