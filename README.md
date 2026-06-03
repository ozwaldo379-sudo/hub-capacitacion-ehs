# Hub Central de Capacitación Integral EHS - Vértice EHS Academy

Este repositorio contiene la solución completa e integrada para el programa de capacitación **"Sistema Integral EHS - Trabajo en Alturas & Supervisor de Seguridad"**.

## 📋 Arquitectura del Proyecto

El sistema está diseñado bajo una arquitectura estática offline (sin necesidad de servidores backend o bases de datos externas), utilizando **HTML5 semántico, CSS3 Custom Properties (Variables de tema)** y **Vanilla JavaScript (ES6+)**.

La estructura de carpetas y archivos generada es la siguiente:

```
HUB_CAPACITACION_EHS/
│
├── 📄 index.html              ← Dashboard y control central del facilitador
├── 🎨 css/
│   ├── styles.css             ← Variables de color y temas (Modo Oscuro/Claro)
│   ├── dashboard.css          ← Estilos del panel de control, tablas y modales
│   └── animations.css         ← Transiciones y micro-interacciones a 60fps
│
├── ⚙️ js/
│   ├── app.js                 ← Inicialización y lógica de actualización del DOM
│   ├── navigation.js          ← Enrutamiento basado en URL Hash e iframe modal
│   └── storage.js             ← Sincronización de participantes en LocalStorage
│
├── 📚 DIA_1_TRABAJO_ALTURAS/
│   ├── presentacion_dia1.html  ← Presentación interactiva (NOM-009)
│   └── dinamicas/
│       ├── dinamica_riesgos.html   ← Juego de detección de peligros
│       ├── dinamica_epp.html       ← Clasificación táctil de equipo contra caídas
│       └── simulador_arnes.html    ← Simulador de inspección de arnés EHS
│
├── 📚 DIA_2_SUPERVISOR_EHS/
│   ├── presentacion_dia2.html  ← Presentación interactiva de supervisión
│   └── dinamicas/
│       ├── dinamica_investigacion.html ← Análisis causa raíz (Ishikawa & 5 Porqués)
│       ├── dinamica_liderazgo.html     ← Simulador de dilemas (Autorizar o Detener)
│       └── rol_play_supervisor.html    ← Juego de diálogo asertivo con Pedro
│
├── 📝 SISTEMA_EXAMEN/
│   ├── exam.html               ← Interfaz del examen adaptativo para ingenieros
│   ├── questions.js            ← Banco de 100+ preguntas oficiales
│   ├── engine.js               ← Motor adaptativo de dificultad EHS
│   ├── report-generator.js     ← Generador y descargador de actas PDF
│   └── admin-panel.html        ← Panel de control del facilitador independiente
│
└── 📖 DOCUMENTACION/
    ├── manual_facilitador.html ← Manual paso a paso para el docente
    ├── guia_rapida.html        ← Checklist físico de aula
    └── faq_soporte.html        ← Resolución de incidencias técnicas comunes
```

---

## ⚡ Funcionalidades Clave

1. **Persistencia Local Sincronizada:** Todo el progreso de lectura, calificaciones de las 6 dinámicas y puntaje final del examen se consolidan bajo el objeto `ehs_training_state` en LocalStorage.
2. **Examen Adaptativo Inteligente:** Bindea dinámicamente los nombres desde el Hub y calcula la dificultad inicial basada en el promedio de las dinámicas. Si un estudiante responde erróneamente, la dificultad desciende para evaluar conceptos base; si responde con precisión, asciende para desafiar sus habilidades críticas.
3. **Generación de Reportes PDF:** Descarga de forma local certificados firmados con logotipos del programa, gráficos comparativos de habilidades por área y bitácora de observaciones del instructor.
4. **Diseño Premium Receptivo:** Interfaz responsiva con soporte nativo para tabletas táctiles y modo oscuro completo.

---

## 🚀 Guía de Uso del Facilitador

1. Haga doble clic en el archivo principal `index.html` para abrir el Hub Central.
2. Vaya a la pestaña **Participantes** y asigne los nombres de los 2 ingenieros bajo evaluación.
3. Al impartir el curso, utilice la **Consola del Facilitador** en el dashboard principal para marcar qué ingeniero está jugando antes de presionar el botón de inicio de cualquier dinámica.
4. Una vez concluidas las jornadas, lance el examen desde el botón **Lanzar Examen Final**. El sistema preseleccionará al alumno de la lista activa.
5. Ingrese a la sección **Reportes** para analizar los gráficos comparativos de Chart.js y exportar los reportes técnicos en PDF.

---
© 2026 Vértice EHS Academy · Soluciones Avanzadas de Seguridad y Salud en el Trabajo.
