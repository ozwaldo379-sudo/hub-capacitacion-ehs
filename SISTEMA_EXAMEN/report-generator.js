/**
 * GENERADOR DE REPORTES Y DASHBOARD DEL FACILITADOR (report-generator.js)
 * Vértice EHS · 2026
 * 
 * Este archivo gestiona la compilación de reportes individuales, la exportación de PDFs vectoriales
 * usando jsPDF, el dibujo de gráficos de radar de competencias en canvas HTML5 y la lógica
 * interactiva del panel de administración del facilitador (comparativas y recomendaciones de formación).
 */

const EHSReportGenerator = {
  
  // ==================== GRÁFICOS DE RADAR NATIVOS (CANVAS) ====================
  
  /**
   * Dibuja un gráfico de radar en un elemento Canvas sin dependencias externas
   */
  drawRadarChart(canvasId, dataPoints, labels, colorStroke, colorFill) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38;

    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);

    const numAxes = labels.length;
    const angleSlice = (Math.PI * 2) / numAxes;

    // 1. Dibujar redes concéntricas (niveles 20%, 40%, 60%, 80%, 100%)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    for (let level = 1; level <= 5; level++) {
      const r = (radius / 5) * level;
      ctx.beginPath();
      for (let i = 0; i < numAxes; i++) {
        const angle = i * angleSlice - Math.PI / 2;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // 2. Dibujar ejes radiales
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleSlice - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 3. Dibujar etiquetas de los ejes
    ctx.fillStyle = "var(--muted)";
    ctx.font = "bold 11px 'Barlow Condensed', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleSlice - Math.PI / 2;
      // Colocar las etiquetas ligeramente afuera del radio máximo
      const x = centerX + Math.cos(angle) * (radius + 24);
      const y = centerY + Math.sin(angle) * (radius + 12);
      
      const label = labels[i];
      // Ajustar alineación según cuadrante
      if (Math.cos(angle) > 0.1) ctx.textAlign = "left";
      else if (Math.cos(angle) < -0.1) ctx.textAlign = "right";
      else ctx.textAlign = "center";

      ctx.fillText(label, x, y);
    }

    // 4. Dibujar la forma del puntaje del participante
    ctx.strokeStyle = colorStroke;
    ctx.fillStyle = colorFill;
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let i = 0; i < numAxes; i++) {
      const pct = dataPoints[i] / 100; // Valor entre 0 y 1
      const angle = i * angleSlice - Math.PI / 2;
      const r = radius * pct;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    // 5. Dibujar pequeños puntos en los nodos del participante
    for (let i = 0; i < numAxes; i++) {
      const pct = dataPoints[i] / 100;
      const angle = i * angleSlice - Math.PI / 2;
      const r = radius * pct;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      
      ctx.fillStyle = colorStroke;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  /**
   * Compila los datos de rendimiento del motor y dibuja los gráficos de radar para ambos cursos
   */
  compileRadarCharts(aciertosPorModulo) {
    // Curso A: Trabajo en Alturas
    const alturasLabels = ["Normativa", "Riesgos", "EPP", "Procedimientos", "Rescate"];
    const alturasKeys = ["modulo1_normativa", "modulo2_riesgos", "modulo3_epp", "modulo4_procedimientos", "modulo5_rescate"];
    const alturasValues = alturasKeys.map(key => {
      const stats = aciertosPorModulo[key];
      return stats && stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    });

    this.drawRadarChart(
      "radarAlturasCanvas",
      alturasValues,
      alturasLabels,
      "#3aaf6d", // Green stroke
      "rgba(46, 139, 87, 0.25)" // Green fill
    );

    // Curso B: Supervisor EHS
    const ehsLabels = ["Roles", "Riesgos", "Investigación", "Auditorías", "Liderazgo"];
    const ehsKeys = ["modulo1_roles", "modulo2_gestionRiesgos", "modulo3_investigacion", "modulo4_auditorias", "modulo5_liderazgo"];
    const ehsValues = ehsKeys.map(key => {
      const stats = aciertosPorModulo[key];
      return stats && stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    });

    this.drawRadarChart(
      "radarSupervisorCanvas",
      ehsValues,
      ehsLabels,
      "#9b59b6", // Purple stroke
      "rgba(155, 89, 182, 0.25)" // Purple fill
    );
  },

  // ==================== EXPORTACIÓN A PDF (JSPDF) ====================
  
  /**
   * Genera y descarga un reporte vectorizado completo del participante en formato PDF
   */
  exportPDF(state, score, aprobado, puntos, maxPuntos) {
    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) {
      alert("La biblioteca jsPDF no está cargada. Por favor, conéctese a internet e intente de nuevo.");
      return;
    }

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "letter"
    });

    const primaryColor = [18, 37, 67]; // Navy
    const goldColor = [201, 169, 97]; // Gold
    const greenColor = [46, 139, 87]; // Green
    const redColor = [224, 82, 82]; // Red
    const textColor = [50, 50, 50]; // Dark grey
    const mutedColor = [120, 130, 140]; // Light grey

    // ──────────────── PAGE 1: REPORTE DE RESULTADOS ────────────────
    
    // Encabezado decorativo superior
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 216, 28, "F");
    
    doc.setFillColor(...goldColor);
    doc.rect(0, 28, 216, 2, "F");

    // Título y Subtítulo
    doc.setTextColor(255, 255, 255);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(18);
    doc.text("VÉRTICE EHS", 16, 13);
    
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...goldColor);
    doc.text("SISTEMA DE EVALUACIÓN ADAPTATIVA INMERSIVA", 16, 19);

    // Fecha a la derecha
    const dateStr = new Date().toLocaleDateString("es-ES", {
      year: "numeric", month: "long", day: "numeric"
    });
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(`Fecha: ${dateStr}`, 154, 16);

    // Cuerpo del reporte
    doc.setTextColor(...primaryColor);
    doc.setFontSize(14);
    doc.setFont("Helvetica", "bold");
    doc.text("REPORTE INDIVIDUAL DE DESEMPEÑO", 16, 42);

    // Información del participante (tarjeta informativa)
    doc.setDrawColor(230, 235, 240);
    doc.setFillColor(248, 250, 252);
    doc.rect(16, 48, 184, 28, "FD");

    doc.setTextColor(...textColor);
    doc.setFontSize(10);
    doc.setFont("Helvetica", "bold");
    doc.text("PARTICIPANTE:", 22, 55);
    doc.setFont("Helvetica", "normal");
    doc.text(state.activeEngineer.toUpperCase(), 58, 55);

    doc.setFont("Helvetica", "bold");
    doc.text("PUNTUACIÓN:", 22, 61);
    doc.setFont("Helvetica", "normal");
    doc.text(`${score}% (${puntos} de ${maxPuntos} puntos ponderados)`, 58, 61);

    doc.setFont("Helvetica", "bold");
    doc.text("DIAGNÓSTICO PREVIO:", 22, 67);
    doc.setFont("Helvetica", "normal");
    doc.text(`${state.simulatorScore} / 100 puntos en simuladores prácticos`, 58, 67);

    // Estado del examen a la derecha en la tarjeta
    doc.setLineWidth(0.5);
    if (aprobado) {
      doc.setFillColor(...greenColor);
      doc.setDrawColor(...greenColor);
      doc.rect(142, 53, 50, 18, "FD");
      doc.setTextColor(255, 255, 255);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("APROBADO", 154, 64);
    } else {
      doc.setFillColor(...redColor);
      doc.setDrawColor(...redColor);
      doc.rect(142, 53, 50, 18, "FD");
      doc.setTextColor(255, 255, 255);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(11);
      doc.text("REFORZAR", 155, 64);
    }

    // Tabla de Métricas de Examen
    doc.setTextColor(...primaryColor);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text("Resumen Analítico del Examen", 16, 88);

    doc.setDrawColor(220, 225, 230);
    doc.line(16, 91, 200, 91);

    // Métricas
    doc.setTextColor(...textColor);
    doc.setFontSize(9.5);
    doc.setFont("Helvetica", "bold");
    doc.text("Parámetro Evaluado", 20, 99);
    doc.text("Valor / Estado", 110, 99);
    doc.text("Impacto Preventivo", 150, 99);
    
    doc.line(16, 102, 200, 102);

    const metrics = [
      ["Nivel Máximo Alcanzado:", state.nivelActual.toUpperCase(), "Ajuste dinámico según dominio"],
      ["Total de Preguntas Contestadas:", `${state.historialRespuestas.length} preguntas`, "Intervalo adaptativo (20-35)"],
      ["Respuestas Correctas:", `${state.historialRespuestas.filter(r=>r.correct).length} de ${state.historialRespuestas.length}`, `Efectividad del ${(state.historialRespuestas.filter(r=>r.correct).length / state.historialRespuestas.length * 100).toFixed(0)}%`],
      ["Tiempo Promedio por Pregunta:", `${examEngine.calculateAverageTime()} segundos`, "Agilidad de toma de decisiones"],
      ["Advertencias de Seguridad (Tab Blur):", `${state.warningsCount} desvíos`, state.warningsCount >= 3 ? "CRÍTICO: Patrón de distracción" : "Conforme a protocolo"]
    ];

    doc.setFont("Helvetica", "normal");
    let yPos = 108;
    metrics.forEach(m => {
      doc.setFont("Helvetica", "bold");
      doc.text(m[0], 20, yPos);
      doc.setFont("Helvetica", "normal");
      doc.text(m[1], 110, yPos);
      doc.setTextColor(...mutedColor);
      doc.text(m[2], 150, yPos);
      doc.setTextColor(...textColor);
      doc.line(16, yPos + 3, 200, yPos + 3);
      yPos += 8;
    });

    // Desglose de Competencias Fuertes y Débiles
    doc.setTextColor(...primaryColor);
    doc.setFontSize(12);
    doc.setFont("Helvetica", "bold");
    doc.text("Mapeo de Brechas de Competencia (Gaps)", 16, yPos + 10);
    
    doc.setDrawColor(220, 225, 230);
    doc.line(16, yPos + 13, 200, yPos + 13);

    const weakAreas = examEngine.detectWeakAreas();
    const strongAreas = examEngine.detectStrongAreas();

    const cleanModName = (modKey) => {
      return modKey.replace("modulo", "Módulo ").replace("gestion", "gestión").replace("investigacion", "investigación").replace("auditorias", "auditorías").replace("_", ": ");
    };

    // Áreas Fuertes
    doc.setTextColor(...textColor);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(10);
    doc.text("FORTALEZAS DEMOSTRADAS:", 20, yPos + 21);
    doc.setFont("Helvetica", "normal");
    if (strongAreas.length > 0) {
      let strongStr = strongAreas.map(cleanModName).join(", ");
      if (strongStr.length > 70) strongStr = strongStr.substring(0, 68) + "...";
      doc.text(strongStr, 20, yPos + 26);
    } else {
      doc.text("Ningún módulo consolidado sobre el 70%.", 20, yPos + 26);
    }

    // Áreas Débiles
    doc.setTextColor(...textColor);
    doc.setFont("Helvetica", "bold");
    doc.text("ÁREAS DE REFORZAMIENTO NECESARIO:", 20, yPos + 36);
    doc.setFont("Helvetica", "normal");
    if (weakAreas.length > 0) {
      let weakStr = weakAreas.map(cleanModName).join(", ");
      if (weakStr.length > 70) weakStr = weakStr.substring(0, 68) + "...";
      doc.setTextColor(...redColor);
      doc.text(weakStr, 20, yPos + 41);
    } else {
      doc.setTextColor(...greenColor);
      doc.text("Ninguna debilidad detectada. Rendimiento homogéneo alto.", 20, yPos + 41);
    }

    // Plan de acción de formación
    doc.setTextColor(...primaryColor);
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Recomendación de Estudio y Plan de Mejora", 16, yPos + 53);
    
    doc.setTextColor(...textColor);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(9.5);
    
    let planText = "";
    if (aprobado) {
      planText = "El ingeniero ha aprobado satisfactoriamente el estándar técnico de Vértice EHS. Se aconseja realizar lecturas periódicas de actualización en la NOM-009-STPS-2011 y mantener su participación en los simulacros prácticos preventivos.";
    } else {
      planText = `Basado en los desvíos técnicos observados, se requiere un plan de estudio guiado de 6 horas enfocado en los módulos identificados como críticos. El participante deberá volver a presentar la evaluación final una vez completadas las horas de estudio recomendadas.`;
    }
    
    const splitPlan = doc.splitTextToSize(planText, 180);
    doc.text(splitPlan, 16, yPos + 59);

    // Pie de página institucional
    doc.setTextColor(...mutedColor);
    doc.setFontSize(8);
    doc.text("Vértice EHS · Soluciones de Ingeniería de Seguridad Industrial Integrada · www.verticeehs.com", 16, 260);

    // ──────────────── PAGE 2: CERTIFICADO (SOLO SI APROBÓ) ────────────────
    if (aprobado) {
      doc.addPage();
      
      // Dibujar marco elegante del certificado (doble borde dorado)
      doc.setDrawColor(...goldColor);
      doc.setLineWidth(1.5);
      doc.rect(8, 8, 200, 260); // Marco exterior
      
      doc.setLineWidth(0.3);
      doc.rect(10, 10, 196, 256); // Borde interior fino

      // Decoraciones en esquinas del certificado
      doc.setFillColor(...goldColor);
      doc.rect(7, 7, 6, 6, "F");
      doc.rect(203, 7, 6, 6, "F");
      doc.rect(7, 263, 6, 6, "F");
      doc.rect(203, 263, 6, 6, "F");

      // Título del certificado
      doc.setTextColor(...primaryColor);
      doc.setFont("Georgia", "bold");
      doc.setFontSize(26);
      doc.text("CERTIFICADO DE APROBACIÓN", 108, 45, { align: "center" });

      doc.setDrawColor(...goldColor);
      doc.setLineWidth(0.6);
      doc.line(50, 52, 166, 52);

      // Texto de otorgamiento
      doc.setTextColor(...textColor);
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(11);
      doc.text("Se otorga la presente distinción a:", 108, 70, { align: "center" });

      // Nombre del Ingeniero destacado
      doc.setTextColor(...goldColor);
      doc.setFont("Georgia", "bold");
      doc.setFontSize(24);
      doc.text(state.activeEngineer.toUpperCase(), 108, 92, { align: "center" });

      doc.setTextColor(...textColor);
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(10.5);
      
      const detailsText = `Por haber acreditado con excelencia técnica e inmersión preventiva su evaluación final integrada, demostrando las competencias evaluadas bajo estándares regulatorios del programa consolidado de:`;
      const splitDetails = doc.splitTextToSize(detailsText, 150);
      doc.text(splitDetails, 108, 112, { align: "center" });

      // Cursos aprobados
      doc.setTextColor(...primaryColor);
      doc.setFont("Helvetica", "bold");
      doc.setFontSize(12.5);
      doc.text("🔴 CURSO A: TRABAJO EN ALTURAS (4 HORAS)", 108, 134, { align: "center" });
      doc.text("🔵 CURSO B: SUPERVISOR DE EHS (5 HORAS)", 108, 142, { align: "center" });

      doc.setTextColor(...textColor);
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(10);
      doc.text("Ponderación del Programa: 15% Calificación Total", 108, 154, { align: "center" });

      // Caja de Calificaciones obtenidas
      doc.setDrawColor(210, 215, 220);
      doc.setFillColor(250, 252, 255);
      doc.rect(48, 166, 120, 32, "FD");

      doc.setFont("Helvetica", "bold");
      doc.text("Calificación del Examen Adaptativo:", 54, 175);
      doc.setFont("Helvetica", "normal");
      doc.text(`${score} / 100 puntos`, 134, 175);

      doc.setFont("Helvetica", "bold");
      doc.text("Equivalente Ponderado Total:", 54, 181);
      doc.setFont("Helvetica", "normal");
      const weightVal = ((score / 100) * 15).toFixed(2);
      doc.text(`${weightVal}% de 15% Máximo`, 134, 181);

      doc.setFont("Helvetica", "bold");
      doc.text("Nivel de Competencia:", 54, 187);
      doc.setFont("Helvetica", "normal");
      doc.text(state.nivelActual.toUpperCase(), 134, 187);

      // Firma e insignias
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(...mutedColor);
      doc.text("DOCUMENTO DE VERIFICACIÓN DIGITAL EHS", 108, 215, { align: "center" });

      // Líneas de firma
      doc.setDrawColor(...goldColor);
      doc.setLineWidth(0.4);
      doc.line(36, 240, 96, 240);
      doc.line(120, 240, 180, 240);

      doc.setTextColor(...textColor);
      doc.setFont("Helvetica", "normal");
      doc.setFontSize(9);
      doc.text("Evaluador de Campo EHS", 66, 245, { align: "center" });
      doc.text("Coordinador Académico Vértice", 150, 245, { align: "center" });

      doc.setFontSize(7.5);
      doc.setTextColor(...mutedColor);
      doc.text("El presente certificado es un documento emitido localmente con validez curricular preventiva.", 108, 256, { align: "center" });
    }

    // Guardar archivo
    doc.save(`Reporte_EHS_${state.activeEngineer.replace(/\s+/g, "_")}.pdf`);
  },

  // ==================== PANEL DE ADMINISTRACIÓN DEL FACILITADOR ====================
  
  /**
   * Intenta acceder al panel de administración mediante la contraseña del facilitador
   */
  loginAdmin(password) {
    if (password === "ehs2026") {
      document.getElementById("adminAuthModal").classList.add("hidden");
      document.getElementById("adminPanel").classList.remove("hidden");
      this.renderAdminRecords();
      return true;
    } else {
      alert("⚠️ Código de facilitador incorrecto.");
      return false;
    }
  },

  /**
   * Carga datos iniciales simulados de los dos ingenieros si la base de datos está vacía
   */
  loadDemoAdminData() {
    try {
      const db = [
        {
          id: "exam_demo_01",
          participantId: "Ing. Carlos Mendoza",
          examDate: new Date(Date.now() - 3600000 * 24).toISOString(), // Ayer
          totalTimeSeconds: 1140, // 19 minutos
          averageTimePerQuestion: 44,
          score: 92,
          aprobado: true,
          difficultyPath: ["medio", "dificil", "dificil", "experto", "experto", "experto"],
          areasWeak: [],
          areasStrong: ["modulo1_normativa", "modulo2_riesgos", "modulo3_epp", "modulo4_procedimientos", "modulo5_rescate", "modulo1_roles", "modulo2_gestionRiesgos"],
          warningsCount: 0,
          flagForReview: [],
          historialRespuestas: []
        },
        {
          id: "exam_demo_02",
          participantId: "Ing. Andrea Ruiz",
          examDate: new Date().toISOString(), // Hoy
          totalTimeSeconds: 1560, // 26 minutos
          averageTimePerQuestion: 62,
          score: 76,
          aprobado: true,
          difficultyPath: ["dificil", "dificil", "medio", "medio", "dificil", "medio"],
          areasWeak: ["modulo3_investigacion"],
          areasStrong: ["modulo1_normativa", "modulo3_epp", "modulo5_liderazgo"],
          warningsCount: 1,
          flagForReview: ["alturas_epp_20"],
          historialRespuestas: []
        }
      ];

      localStorage.setItem("ehs_exam_database", JSON.stringify(db));
      this.renderAdminRecords();
      alert("✅ Datos demo de Carlos Mendoza y Andrea Ruiz cargados con éxito.");
    } catch (e) {
      console.error("Error cargando demo data:", e);
    }
  },

  /**
   * Lee la base de datos local y dibuja los registros en el panel de administración
   */
  renderAdminRecords() {
    const rawDb = localStorage.getItem("ehs_exam_database") || "[]";
    const db = JSON.parse(rawDb);
    
    const tbody = document.getElementById("adminRecordsTableBody");
    tbody.innerHTML = "";

    if (db.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--muted); padding:20px;">No hay registros cargados. Presione "Cargar Datos Demo" para probar.</td></tr>`;
      document.getElementById("adminGapsAnalysis").innerHTML = `<p style="color:var(--muted)">Sin datos suficientes para compilar brechas.</p>`;
      return;
    }

    db.forEach((record, index) => {
      const tr = document.createElement("tr");
      
      const date = new Date(record.examDate).toLocaleDateString("es-ES", {
        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
      });

      const duration = `${Math.floor(record.totalTimeSeconds / 60)}m ${record.totalTimeSeconds % 60}s`;
      
      const statusClass = record.aprobado ? "admin-status-aprobado" : "admin-status-reforzar";
      const statusLabel = record.aprobado ? "APROBADO" : "REFORZAR";

      tr.innerHTML = `
        <td><strong>${record.participantId}</strong></td>
        <td>${date}</td>
        <td>${record.score}%</td>
        <td><span class="admin-status-badge ${statusClass}">${statusLabel}</span></td>
        <td>${duration}</td>
        <td><span class="admin-warn-badge ${record.warningsCount >= 3 ? 'crit' : ''}">${record.warningsCount} desvíos</span></td>
        <td>
          <button class="admin-btn-action" onclick="EHSReportGenerator.downloadRecordPDF('${record.id}')">📄 PDF</button>
          <button class="admin-btn-delete" onclick="EHSReportGenerator.deleteRecord('${record.id}')">🗑️</button>
        </td>
      `;
      
      tbody.appendChild(tr);
    });

    // Calcular análisis de brechas colectivas
    this.calculateGapsAnalysis(db);
  },

  /**
   * Elimina un registro específico del historial administrativo
   */
  deleteRecord(recordId) {
    if (!confirm("¿Está seguro de eliminar este registro de evaluación de forma permanente?")) return;
    
    try {
      const rawDb = localStorage.getItem("ehs_exam_database") || "[]";
      let db = JSON.parse(rawDb);
      db = db.filter(r => r.id !== recordId);
      localStorage.setItem("ehs_exam_database", JSON.stringify(db));
      this.renderAdminRecords();
    } catch (e) {
      console.error("Error al borrar registro:", e);
    }
  },

  /**
   * Borra todos los registros guardados en la base de datos
   */
  clearAllRecords() {
    if (!confirm("⚠️ ADVERTENCIA: Esta acción eliminará permanentemente TODOS los registros de la base de datos. ¿Desea continuar?")) return;
    localStorage.removeItem("ehs_exam_database");
    this.renderAdminRecords();
  },

  /**
   * Busca un registro por ID y gatilla su descarga en PDF
   */
  downloadRecordPDF(recordId) {
    const rawDb = localStorage.getItem("ehs_exam_database") || "[]";
    const db = JSON.parse(rawDb);
    const record = db.find(r => r.id === recordId);
    
    if (!record) {
      alert("No se encontró el registro solicitado.");
      return;
    }

    // Estructura de mock de estado compatible con el constructor del PDF
    const mockState = {
      activeEngineer: record.participantId,
      simulatorScore: record.simulatorScore || 80,
      nivelActual: record.difficultyPath[record.difficultyPath.length - 1] || "medio",
      warningsCount: record.warningsCount,
      flaggedForReview: record.flagForReview || [],
      historialRespuestas: record.historialRespuestas || []
    };

    // Estimar los puntos ponderados basados en el porcentaje
    const maxPuntosEstimados = 60;
    const puntosEstimados = Math.round((record.score / 100) * maxPuntosEstimados);

    this.exportPDF(mockState, record.score, record.aprobado, puntosEstimados, maxPuntosEstimados);
  },

  /**
   * Módulo analítico que calcula brechas conjuntas de los ingenieros y genera recomendaciones
   */
  calculateGapsAnalysis(records) {
    const container = document.getElementById("adminGapsAnalysis");
    
    // Contadores globales de debilidades
    const debilidadesMap = {};
    const moduloCount = {};

    records.forEach(r => {
      if (r.areasWeak) {
        r.areasWeak.forEach(mod => {
          debilidadesMap[mod] = (debilidadesMap[mod] || 0) + 1;
        });
      }
    });

    const cleanModName = (modKey) => {
      return modKey.replace("modulo", "Módulo ").replace("gestion", "gestión").replace("investigacion", "investigación").replace("auditorias", "auditorías").replace("_", ": ");
    };

    // Ordenar debilidades de mayor a menor frecuencia
    const sortedGaps = Object.keys(debilidadesMap).sort((a, b) => debilidadesMap[b] - debilidadesMap[a]);

    if (sortedGaps.length === 0) {
      container.innerHTML = `
        <div style="background:rgba(46, 139, 87, 0.1); border:1px solid rgba(46, 139, 87, 0.25); border-radius:8px; padding:16px; color:var(--green-light)">
          <strong>🏆 Desempeño Consolidado de Alto Estándar:</strong> No se han detectado brechas colectivas críticas (con efectividad < 70%). Ambos ingenieros demuestran dominio normativo y preventivo.
        </div>
      `;
      return;
    }

    let html = `<ul style="margin-left:20px; margin-bottom:16px; font-size:14px; color:var(--off-white)">`;
    sortedGaps.forEach(mod => {
      const count = debilidadesMap[mod];
      const pct = Math.round((count / records.length) * 100);
      html += `<li style="margin-bottom:6px"><span style="color:var(--red)">${cleanModName(mod)}</span>: Afecta al ${pct}% de los evaluados (${count} participantes).</li>`;
    });
    html += `</ul>`;

    // Recomendaciones estratégicas inteligentes basadas en brechas
    let recomendacion = "";
    const topGap = sortedGaps[0];
    
    if (topGap.includes("epp")) {
      recomendacion = "<strong>🛠️ Recomendación:</strong> Se observa una brecha en EPP de Alturas. Se sugiere un taller de inspección práctica pre-uso de arneses con calibración táctil e identificación de desgaste en costuras.";
    } else if (topGap.includes("rescate")) {
      recomendacion = "<strong>🚨 Recomendación:</strong> El módulo de rescate presenta debilidades. Es prioritario realizar un simulacro de recuperación activa en altura y repasar el protocolo de atención médica en suspensión.";
    } else if (topGap.includes("investigacion")) {
      recomendacion = "<strong>📊 Recomendación:</strong> La investigación de incidentes muestra bajo puntaje. Se recomienda programar un taller de análisis de causa raíz utilizando casos prácticos reales mediante la técnica de espina de pescado (Ishikawa) y 5 Porqués.";
    } else if (topGap.includes("gestionRiesgos")) {
      recomendacion = "<strong>📝 Recomendación:</strong> Gaps detectados en Análisis de Riesgos. Se requiere reforzar la elaboración grupal de JSAs (Job Safety Analysis) integrando delimitación de perímetros y control de energías.";
    } else {
      recomendacion = "<strong>📚 Recomendación:</strong> Se aconseja programar una sesión de revisión teórica colectiva de 2 horas sobre las normativas que presentaron menor efectividad antes de sus visitas de campo.";
    }

    container.innerHTML = `
      <div style="background:rgba(224, 82, 82, 0.06); border:1px solid rgba(224, 82, 82, 0.2); border-radius:8px; padding:16px; margin-bottom:16px;">
        <h4 style="font-family:'Barlow Condensed', sans-serif; font-size:15px; color:var(--gold-light); margin-bottom:8px; text-transform:uppercase;">Brechas Críticas Detectadas:</h4>
        ${html}
      </div>
      <div style="background:rgba(201, 169, 97, 0.08); border:1px solid rgba(201, 169, 97, 0.25); border-radius:8px; padding:16px; color:var(--off-white); font-size:13.5px; line-height:1.45;">
        ${recomendacion}
      </div>
    `;
  }
};
