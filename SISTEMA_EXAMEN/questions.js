/**
 * BANCO DE PREGUNTAS COMPLETO (200 preguntas)
 * Vértice EHS · Evaluación Adaptativa Inmersiva
 * 
 * Estructura:
 * - trabajoAlturas (90 preguntas en 5 módulos)
 * - supervisorEHS (110 preguntas en 5 módulos)
 * 
 * Cada pregunta incluye:
 * - id: Identificador único
 * - difficulty: Nivel de dificultad (facil, medio, dificil, experto)
 * - type: Tipo de pregunta (teorica, caso, orden)
 * - text: Texto de la pregunta
 * - scenario: (Opcional) Escenario detallado
 * - options: (Para teorica/caso) Opciones de respuesta
 * - answer: (Para teorica/caso) Índice de la respuesta correcta (0-3)
 * - items: (Para orden) Elementos a ordenar
 * - correctOrder: (Para orden) Secuencia correcta de índices
 * - feedback: Explicación pedagógica constructiva
 * - reference: Referencia normativa legal aplicable
 * - competencies: Competencias evaluadas
 */

const questionBank = {
  "trabajoAlturas": {
    "modulo1_normativa": [
      {
        "id": "alturas_norm_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es la normativa vigente en México que regula los requisitos de seguridad para trabajo en alturas?",
        "options": [
          "NOM-002-STPS-2010",
          "NOM-009-STPS-2011",
          "NOM-031-STPS-2011",
          "NOM-004-STPS-1999"
        ],
        "answer": 1,
        "feedback": "Correcto. La NOM-009-STPS-2011 es la norma vigente mexicana, la cual derogó la NOM-002-STPS-2010.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "Según la NOM-009-STPS-2011, ¿a partir de qué altura se considera trabajo en alturas con riesgo de caída?",
        "options": [
          "1.50 metros",
          "1.80 metros",
          "1.80 metros",
          "Todo trabajo en el que exista el riesgo de caer a 1.80 metros o más sobre un nivel inferior"
        ],
        "answer": 3,
        "feedback": "Correcto. La norma mexicana (NOM-009) define trabajo en alturas como todo trabajo en el que exista el riesgo de caer a 1.80 metros o más sobre un nivel inferior. Nota: En México, la NOM-009-STPS-2011 define el umbral a 1.80 metros.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el periodo de validez legal del reentrenamiento obligatorio en trabajo en alturas en México?",
        "options": [
          "Cada 6 meses",
          "Cada año",
          "Cada dos años o cuando cambie de actividad/condición",
          "Solo al ingresar a la empresa"
        ],
        "answer": 2,
        "feedback": "Correcto. El reentrenamiento debe realizarse cada dos años, o inmediatamente si el trabajador cambia de actividad laboral, de condiciones de riesgo, o si se ausenta más de 18 meses.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué rol de seguridad tiene la facultad legal de aprobar el diseño de los sistemas de protección contra caídas?",
        "options": [
          "Coordinador de Trabajo en Alturas",
          "Trabajador Autorizado",
          "Persona Calificada",
          "Jefe de Área"
        ],
        "answer": 2,
        "feedback": "Correcto. Solo la Persona Calificada (Ingeniero con formación específica y licencia en SST) puede diseñar y certificar puntos de anclaje y sistemas de protección contra caídas.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Según la normativa de alturas, ¿cuál es el perfil mínimo que debe cumplir un Coordinador de Trabajo en Alturas?",
        "options": [
          "Ser el operario con más experiencia en el área.",
          "Tener certificado de trabajador autorizado, curso de coordinador de 80 horas y designación por escrito del empleador.",
          "Contar únicamente con licencia de salud ocupacional.",
          "Ser el jefe directo de la cuadrilla de mantenimiento."
        ],
        "answer": 1,
        "feedback": "Correcto. El Coordinador requiere certificación vigente de nivel trabajador autorizado, formación específica de Coordinador y designación formal por escrito.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuáles son los roles obligatorios para ejecutar una tarea en altura con sistemas de protección personal contra caídas?",
        "options": [
          "Solo un Trabajador Autorizado.",
          "Un Trabajador Autorizado y un Rescatista.",
          "Trabajador Autorizado, Coordinador de Alturas y Ayudante de seguridad.",
          "Trabajador Autorizado y un supervisor administrativo."
        ],
        "answer": 2,
        "feedback": "Correcto. Se requiere el trabajador certificado en la tarea, la supervisión de un Coordinador (que puede ser concurrente en planta) y un ayudante o vigía si se requiere delimitación del área.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué documento oficial del Secretaría del Trabajo y Previsión Social (STPS) de México debe registrarse y actualizarse para los centros de entrenamiento de alturas?",
        "options": [
          "Registro en la plataforma del Secretaría del Trabajo y Previsión Social (STPS)",
          "Licencia ambiental especial",
          "Permiso del cuerpo de bomberos local",
          "Certificación ISO 9001"
        ],
        "answer": 0,
        "feedback": "Correcto. Todos los proveedores y centros de entrenamiento en alturas deben estar registrados en la base de datos oficial del Secretaría del Trabajo y Previsión Social (STPS).",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la sanción legal directa aplicable a una empresa por incumplimiento normativo grave en trabajo en alturas en caso de accidente mortal?",
        "options": [
          "Multa administrativa de hasta 500 salarios mínimos legales mensuales vigentes, cierre temporal de la empresa y posible responsabilidad civil/penal solidaria.",
          "Llamado de atención verbal y periodo de gracia de 60 días.",
          "Suspensión de actividades únicamente el día del incidente.",
          "Despido sin justa causa del trabajador accidentado."
        ],
        "answer": 0,
        "feedback": "Correcto. Los accidentes mortales con omisión de medidas de seguridad conllevan multas severas de la STPS/Secretaría del Trabajo y Previsión Social (STPS), y demandas penales/civiles contra los responsables directos (gerentes y supervisores).",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Un contratista presenta un certificado de capacitación en alturas emitido en el extranjero. ¿Es válido para trabajar de inmediato en México?",
        "options": [
          "Sí, todos los certificados extranjeros tienen validez automática por tratados internacionales.",
          "No, debe ser convalidado y verificado por el STPS u organismo de certificación acreditado antes de realizar la labor.",
          "Sí, si tiene firma del cónsul del país emisor.",
          "No, debe volver a hacer el curso completo de 40 horas en México sin excepción."
        ],
        "answer": 1,
        "feedback": "Correcto. Los certificados extranjeros requieren procesos de convalidación o certificación de competencias locales bajo la NOM-009-STPS-2011.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cómo se define legalmente la 'Responsabilidad Solidaria' entre el contratante y el contratista en temas de SST?",
        "options": [
          "El contratante solo responde si el contratista se declara en quiebra.",
          "El contratante y el contratista comparten la obligación civil y económica frente al pago de indemnizaciones derivadas de un accidente de trabajo por culpa patronal.",
          "La responsabilidad legal recae al 100% sobre la Instituto Mexicano del Seguro Social (IMSS) o aseguradora contratada.",
          "No existe tal concepto en el derecho laboral latinoamericano."
        ],
        "answer": 1,
        "feedback": "Correcto. La responsabilidad solidaria implica que la empresa dueña del establecimiento (contratante) debe pagar las indemnizaciones si el contratista incumple o carece de fondos para resarcir los daños causados por un accidente.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📋 CASO NORMATIVO: Durante una inspección del STPS en una obra civil, se detecta que los puntos de anclaje fueron soldados a vigas estructurales por el soldador de la obra sin planos de diseño. El Coordinador argumenta que el soldador está calificado en soldadura estructural.",
        "text": "¿Cuál es la infracción normativa y la acción requerida?",
        "options": [
          "No hay infracción porque el soldador es apto; basta con pintar de amarillo los puntos.",
          "Los anclajes carecen de memoria de diseño y certificación por una Persona Calificada; deben clausurarse y ser evaluados/certificados estructuralmente.",
          "La única infracción es que el soldador no usó arnés de cuero; debe amonestarse al soldador.",
          "Se debe solicitar un ensayo de tracción destructivo in situ en todos los anclajes."
        ],
        "answer": 1,
        "feedback": "Correcto. Todo anclaje estructural no prefabricado debe contar con el diseño, memoria de cálculo y firma de una Persona Calificada. El soldador no suple la responsabilidad de diseño ingenieril.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "⚡ CASO LEGAL: Ocurre una caída desde 8 metros de un pintor subcontratado. Se descubre que su afiliación al Seguro Social (IMSS) había sido suspendida temporalmente por falta de pago del subcontratista, aunque el permiso de alturas estaba firmado por el Coordinador del contratante.",
        "text": "¿Qué nivel de responsabilidad enfrenta el supervisor de EHS de la empresa contratante?",
        "options": [
          "Ninguna, porque el pintor dependía directamente del subcontratista.",
          "Responsabilidad civil contractual y extracontractual directa, e investigación penal por negligencia en el control y verificación de los requisitos obligatorios de ingreso (culpa en la vigilancia).",
          "Solo un llamado de atención de recursos humanos por no archivar bien la planilla.",
          "Toda la responsabilidad se traslada a la IMSS/Salud por no avisar la suspensión."
        ],
        "answer": 1,
        "feedback": "Correcto. El supervisor EHS y la empresa contratante incurren en 'culpa in vigilando' (negligencia en la supervisión) al permitir el trabajo de alto riesgo sin verificar activamente el pago real a la seguridad social, asumiendo responsabilidad solidaria penal y civil.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál de las siguientes es una obligación directa del TRABAJADOR en alturas según las normativas vigentes?",
        "options": [
          "Diseñar los puntos de anclaje de la planta.",
          "Participar en las capacitaciones, cumplir las medidas de prevención y reportar daños en los equipos.",
          "Comprar su propio absorbedor de impacto.",
          "Elaborar los certificados de sus compañeros de cuadrilla."
        ],
        "answer": 1,
        "feedback": "Correcto. El trabajador está obligado a cuidar de su seguridad y la de sus compañeros, participar de las actividades de SST, reportar peligros y cuidar los equipos suministrados.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué exige la norma sobre las pruebas de resistencia a las que deben someterse los puntos de anclaje para ser certificados en campo?",
        "options": [
          "Prueba de tracción estática no destructiva al 100% de la carga de diseño.",
          "Prueba de resistencia estática no destructiva del 50% de la resistencia nominal (2,500 lbs o 11.1 kN) bajo supervisión de una Persona Calificada.",
          "Un martillazo de prueba para verificar estabilidad de la soldadura.",
          "Golpes repetitivos con carga viva suspendida."
        ],
        "answer": 1,
        "feedback": "Correcto. Las pruebas de campo no destructivas para certificar un anclaje estructural deben ensayarse al 50% de la resistencia mínima requerida (es decir, 2,500 libras) para evitar daño estructural latente en el punto.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      },
      {
        "id": "alturas_norm_15",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "En México, la NOM-009-STPS-2011 establece que los sistemas de acceso para trabajo en alturas (andamios, escaleras) deben:",
        "options": [
          "Ser fabricados con materiales reciclados no certificados.",
          "Estar certificados por fabricante u organismo acreditado y contar con inspección pre-uso detallada por escrito.",
          "Ser instalados por cualquier persona que no tenga miedo a la altura.",
          "Uso de andamios de madera pintada sin restricción."
        ],
        "answer": 1,
        "feedback": "Correcto. Todos los andamios y sistemas de acceso deben estar certificados de fábrica por normas nacionales o internacionales (OSHA, EN) y ser inspeccionados antes de su montaje.",
        "reference": "NOM-009-STPS-2011 (México), Artículos 1, 2, 3, 5 y 27",
        "competencies": [
          "Cumplimiento Normativo",
          "Responsabilidad SST"
        ]
      }
    ],
    "modulo2_riesgos": [
      {
        "id": "alturas_riesg_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué factor físico aumenta significativamente el riesgo de caída en exteriores y obliga a suspender trabajos en alturas?",
        "options": [
          "Altas temperaturas controladas",
          "Vientos fuertes con ráfagas >30 km/h o lluvias torrenciales",
          "Baja presión atmosférica ordinaria",
          "Humedad relativa moderada"
        ],
        "answer": 1,
        "feedback": "Correcto. Viento fuerte, lluvia o tormentas eléctricas aumentan drásticamente el riesgo de pérdida de equilibrio y deben gatillar la detención preventiva.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿A qué se refiere la 'Jerarquía de Controles' en la gestión de riesgos de SST?",
        "options": [
          "Al organigrama de jefes y supervisores de la planta.",
          "Al orden de prioridad de medidas preventivas, desde eliminar el peligro hasta el EPP como última opción.",
          "A la jerarquía de severidad de las multas de la autoridad.",
          "Al rango de importancia de las aseguradoras de riesgo."
        ],
        "answer": 1,
        "feedback": "Correcto. La jerarquía establece: 1. Eliminación, 2. Sustitución, 3. Controles de Ingeniería, 4. Controles Administrativos, 5. EPP.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué es el 'Efecto Péndulo' en una caída de altura?",
        "options": [
          "La oscilación del trabajador debido a la fatiga muscular prolongada.",
          "El movimiento de balanceo que ocurre cuando un trabajador cae estando anclado lateralmente a una distancia del punto de anclaje, golpeándose contra estructuras adyacentes.",
          "La variación del tiempo de suspensión por el arnés.",
          "El peso oscilante de las herramientas del pintor."
        ],
        "answer": 1,
        "feedback": "Correcto. El efecto péndulo ocurre por anclarse lejos de la vertical del punto de trabajo. Provoca choques violentos contra vigas u obstáculos adyacentes.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Si un trabajador cae, la función primordial del absorbedor de impacto en la línea de vida es:",
        "options": [
          "Evitar que el arnés se rasgue durante la caída.",
          "Reducir las fuerzas de detención de la caída sobre el cuerpo humano por debajo de 900 lbs (4 kN) u 1,800 lbs (8 kN) según tipo de absorbedor.",
          "Duplicar la distancia de la caída para amortiguar el impacto.",
          "Mantener el arnés ajustado automáticamente."
        ],
        "answer": 1,
        "feedback": "Correcto. El absorbedor de impacto se desgarra de manera controlada para disipar energía, manteniendo la desaceleración del cuerpo a límites fisiológicamente tolerables.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cómo se calcula la Distancia de Caída Libre (DCL) en un sistema activo?",
        "options": [
          "Es la altura total del edificio menos la longitud de la línea de vida.",
          "Es la longitud del conector (línea de vida) más la distancia que recorre el absorbedor de impacto al abrirse.",
          "Es la distancia vertical recorrida antes de que el sistema empiece a detener la caída.",
          "El peso del operario multiplicado por 9.8 m/s²."
        ],
        "answer": 2,
        "feedback": "Correcto. La caída libre representa el tramo que recorre el cuerpo libremente en gravedad antes de que el dispositivo amortiguador comience a tensionarse y frenar.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es el Factor de Caída en un escenario donde el punto de anclaje está por DEBAJO de la conexión dorsal del arnés del trabajador?",
        "options": [
          "Factor de Caída 0",
          "Factor de Caída 1",
          "Factor de Caída 2",
          "Factor de Caída 1.5"
        ],
        "answer": 2,
        "feedback": "Correcto. Cuando el anclaje está en los pies del trabajador, el factor de caída es 2 (el más peligroso), ya que caerá el doble de la longitud del conector.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué medida de control de ingeniería es prioritaria en un borde de placa sin barandales?",
        "options": [
          "Pintar una línea roja de peligro en el suelo.",
          "Instalar un barandal de seguridad rígido y certificado capaz de soportar 200 libras de impacto.",
          "Obligar al uso de arnés con absorbedor únicamente.",
          "Dar una charla de seguridad de 5 minutos sobre 'poner atención'."
        ],
        "answer": 1,
        "feedback": "Correcto. En la jerarquía de controles, las barreras colectivas físicas (ingeniería) como barandales rígidos se priorizan sobre las soluciones de protección individual (EPP).",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es el Requerimiento de Claridad (RC) o Distancia de Seguridad requerido si se utiliza una línea de vida de 1.8m con absorbedor de 1.2m, una estatura del trabajador de 1.8m, elongación del arnés de 0.3m y margen de seguridad de 1m?",
        "options": [
          "3.0 metros",
          "4.2 metros",
          "5.3 metros",
          "6.1 metros"
        ],
        "answer": 3,
        "feedback": "Correcto. RC = Longitud línea (1.8m) + Elongación absorbedor (1.2m) + Estatura (1.8m) + Elongación arnés (0.3m) + Margen de seguridad (1.0m) = 6.1 metros totales obligatorios sobre el piso u obstáculo inferior.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Un operario trabaja en una viga metálica a 4 metros de altura sobre concreto. Utiliza una línea de vida de 1.8m con absorbedor de impacto de 1.2m. El punto de anclaje está en sus pies (Factor de Caída 2). ¿Qué condición de seguridad se presenta?",
        "options": [
          "El sistema es seguro debido a que tiene absorbedor de impacto.",
          "El Requerimiento de Claridad excede la altura disponible de 4m; el operario impactará el piso antes de que la línea frene la caída (fallo por distancia insuficiente).",
          "El factor de caída 2 anula el efecto de la fuerza de gravedad.",
          "El arnés se romperá instantáneamente."
        ],
        "answer": 1,
        "feedback": "Correcto. Con anclaje a los pies, caerá libremente 3.6m (2 veces la longitud del conector de 1.8m). Al sumarse la apertura del absorbedor, el operario golpeará inevitablemente el concreto antes de detenerse.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la diferencia operativa entre un sistema de Restricción y un sistema de Detención de caídas?",
        "options": [
          "La Restricción impide físicamente que el trabajador se acerque al borde del peligro; la Detención permite la caída libre y luego la frena.",
          "La Restricción solo se usa en andamios y la Detención en escaleras.",
          "La Restricción no requiere arnés y la Detención sí.",
          "No hay diferencias, son términos intercambiables."
        ],
        "answer": 0,
        "feedback": "Correcto. La restricción es un control preventivo superior porque evita la ocurrencia física de la caída, mientras que la detención actúa una vez que la caída ya se ha iniciado.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏗️ ESCENARIO DE DISEÑO: Un ingeniero de EHS debe diseñar la seguridad para un trabajo de limpieza de vidrios exteriores en un muro cortina a 15 metros. Propone instalar una línea de vida horizontal temporal de cable de acero tensionada entre dos vigas de concreto. El contratista tiene 3 pintores que se anclarán simultáneamente a esta única línea.",
        "text": "¿Cuál es el principal peligro de diseño no contemplado?",
        "options": [
          "La deflexión de la línea (efecto catenaria) ante una caída múltiple aumentará severamente las cargas en los extremos estructurales y el requerimiento de claridad, pudiendo colapsar los anclajes o chocar a los pintores.",
          "Que el cable de acero raye los vidrios del cliente.",
          "Que no se puede usar cable de acero, solo cuerda de cáñamo natural.",
          "Que los pintores se distraigan hablando entre ellos."
        ],
        "answer": 0,
        "feedback": "Correcto. Las líneas de vida horizontales múltiples requieren un cálculo riguroso de la fuerza estática transmitida a los soportes extremos (que se multiplica debido a la catenaria) y de la caída adicional por deflexión dinámica.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "⚡ ESCENARIO DE TRABAJO ELÉCTRICO: Un liniero debe realizar empalmes en una torre de alta tensión a 20 metros de altura en un entorno húmedo. El liniero cuenta con un arnés clásico de poliéster y argollas de acero, anclado a un cable de contrapeso trenzado de acero.",
        "text": "Identifique el error crítico de evaluación de riesgos del supervisor de EHS:",
        "options": [
          "El poliéster es propenso a rasgarse con el sudor del liniero.",
          "No evaluar el riesgo eléctrico implícito: el arnés metálico convencional y el cable de acero son conductores de alta conductividad; se debió exigir arnés dieléctrico con argollas recubiertas y línea de vida sintética no conductora.",
          "No proveer guantes de cuero pesados para el frío extremo.",
          "Permitir el uso de botellones de agua metálicos."
        ],
        "answer": 1,
        "feedback": "Correcto. En entornos con potencial eléctrico latente, el EPP debe estar adaptado para evitar conducción de corriente (anillos dieléctricos con recubrimiento de polímero y eslingas sintéticas).",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué factor del terreno o área inferior debe evaluarse prioritariamente en un Análisis de Riesgo de altura?",
        "options": [
          "La marca del concreto instalado en la cimentación.",
          "La presencia de objetos punzantes, líneas eléctricas expuestas u obstáculos en la zona de caída potencial.",
          "El tipo de vegetación aledaña al área de planta.",
          "La distancia a la oficina de recursos humanos."
        ],
        "answer": 1,
        "feedback": "Correcto. El análisis de riesgos debe verificar qué hay debajo de la zona de caída para mitigar riesgos secundarios, como tuberías calientes, estructuras metálicas agudas o conductores de energía.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "El Factor de Caída 0 (cero) representa:",
        "options": [
          "El escenario ideal: el punto de anclaje está por encima de la cabeza del trabajador y la línea permanece tensionada reduciendo la caída libre a casi cero.",
          "Que el operario no está anclado a ningún lado.",
          "Que la caída libre es infinita.",
          "Una caída sobre una lona de rescate."
        ],
        "answer": 0,
        "feedback": "Correcto. El factor 0 es el más seguro en sistemas de detención de caídas debido a que no permite caída libre antes de la tensión del sistema.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_15",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Por qué el uso de líneas de vida retráctiles autotractiles reduce la DCL?",
        "options": [
          "Porque son fabricadas con cuerdas elásticas especiales.",
          "Porque tienen un sensor de proximidad electrónico.",
          "Porque actúan como el cinturón de seguridad de un auto: se bloquean casi de inmediato al detectar aceleración brusca, reduciendo la caída libre a centímetros.",
          "Porque limitan el peso del operario."
        ],
        "answer": 2,
        "feedback": "Correcto. Los dispositivos retráctiles detienen la caída casi en el momento en que se inicia, reduciendo la caída libre a unos 10-30 cm, bajando enormemente la DCL y la fuerza de impacto.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_16",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué es el Factor de Caída 1?",
        "options": [
          "El anclaje está al nivel de la conexión dorsal del arnés.",
          "El anclaje está en los pies.",
          "El anclaje está en la cabeza.",
          "La caída libre es de 1 metro."
        ],
        "answer": 0,
        "feedback": "Correcto. El factor 1 se da cuando el anclaje está al nivel del punto de anclaje del arnés. La caída libre máxima equivale a la longitud del conector.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_17",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué fuerza máxima de impacto sobre el cuerpo (fuerza de detención) está permitida por normas ANSI/OSHA para un trabajador que usa arnés?",
        "options": [
          "3,000 lbs (13.3 kN)",
          "1,800 lbs (8 kN) para arnés corporal",
          "5,000 lbs (22.2 kN)",
          "800 lbs (3.5 kN)"
        ],
        "answer": 1,
        "feedback": "Correcto. El arnés debe limitar la fuerza sobre el cuerpo a un máximo de 1,800 libras para evitar daños internos severos en la columna o pelvis.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_18",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Un operario pesa 110 kg (con herramientas). Al calcular la resistencia requerida de una línea de vida horizontal portátil para 2 personas, se debe contemplar:",
        "options": [
          "El peso promedio de un operario sin herramientas.",
          "La suma de las fuerzas dinámicas de caída simultánea certificadas por una Persona Calificada con factor de seguridad mínimo de 2.",
          "Un valor arbitrario de 1,000 kg.",
          "Solo la resistencia nominal del absorbedor simple."
        ],
        "answer": 1,
        "feedback": "Correcto. El diseño estructural de líneas horizontales para múltiples usuarios exige modelar la caída múltiple aplicando un coeficiente de seguridad mayor a 2 sobre el cálculo ingenieril dinámico.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_19",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué riesgo específico se busca controlar con el uso de sistemas de posicionamiento?",
        "options": [
          "La detención de una caída de gran altura.",
          "Permitir al trabajador operar con las manos libres al sostenerse en un poste o estructura inclinada, limitando la caída libre a máximo 60 cm.",
          "El transporte vertical de materiales pesados.",
          "El acceso rápido a andamios colgantes."
        ],
        "answer": 1,
        "feedback": "Correcto. Los conectores de posicionamiento son para sostener al trabajador en su punto de labor con las manos libres, y no sustituyen al sistema independiente de detención de caídas.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      },
      {
        "id": "alturas_riesg_20",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏢 ESCENARIO DE TRABAJO CALIENTE: Un soldador realiza reparaciones estructurales en un silo a 12 metros de altura utilizando un equipo de soldadura eléctrica convencional. Está anclado con una eslinga estándar de nylon amarillo con absorbedor de impacto.",
        "text": "¿Cuál es el riesgo no controlado en este diseño?",
        "options": [
          "Que la eslinga llame la atención de los transeúntes.",
          "Que las chispas y escorias calientes de la soldadura fundan o quemen instantáneamente la fibra sintética de la eslinga, provocando una falla catastrófica del conector ante una caída. Se requiere eslinga de cable de acero recubierto o fibra de Kevlar/aramida resistente a altas temperaturas.",
          "Que el soldador se canse debido al peso de la eslinga.",
          "La falta de certificación del electrodo de soldadura por el IMSS."
        ],
        "answer": 1,
        "feedback": "Correcto. En trabajos calientes (soldadura, oxicorte) en alturas, el conector debe ser resistente a la combustión y abrasión térmica, como líneas de cable de acero o aramida ignífuga.",
        "reference": "NOM-009-STPS-2011, Artículo 15 / OSHA 1926.501 / ANSI Z359.2",
        "competencies": [
          "Evaluación de Riesgos",
          "Jerarquía de Controles"
        ]
      }
    ],
    "modulo3_epp": [
      {
        "id": "alturas_epp_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es la resistencia a la tracción mínima que debe tener un punto de anclaje certificado?",
        "options": [
          "1,000 lbs (4.4 kN)",
          "3,000 lbs (13.3 kN)",
          "5,000 lbs (22.2 kN) por persona conectada",
          "10,000 lbs (44.4 kN)"
        ],
        "answer": 2,
        "feedback": "Correcto. Un punto de anclaje certificado debe resistir al menos 5,000 libras (22.2 kN) por cada trabajador conectado, o el doble de la fuerza de detención calculada por una Persona Calificada.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Con qué frecuencia se debe inspeccionar visualmente un arnés de seguridad para trabajo en alturas?",
        "options": [
          "Cada mes por el prevencionista",
          "Cada seis meses",
          "Antes de cada uso por parte del trabajador (inspección pre-uso)",
          "Solo después de una caída"
        ],
        "answer": 2,
        "feedback": "Correcto. La inspección pre-uso visual y táctil es obligatoria para el usuario antes de colocarse el equipo cada jornada laboral.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué tipo de arnés está prohibido para detención de caídas libres?",
        "options": [
          "Arnés dieléctrico",
          "Cinturón de posicionamiento o arnés de cintura simple",
          "Arnés clase 3 cuerpo completo",
          "Arnés con argollas pectorales"
        ],
        "answer": 1,
        "feedback": "Correcto. Los cinturones de cintura simples están estrictamente prohibidos para detener caídas libres por el altísimo riesgo de lesiones lumbares u organoabdominales letales.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Un mosquetón de seguridad utilizado en altura debe contar obligatoriamente con:",
        "options": [
          "Apertura manual simple sin seguro.",
          "Cierre automático y doble o triple acción de bloqueo rápido para evitar aperturas accidentales.",
          "Certificación de color dorado.",
          "Un diámetro mínimo de 5 pulgadas."
        ],
        "answer": 1,
        "feedback": "Correcto. Los conectores como mosquetones y ganchos deben tener seguro de doble o triple acción (giro, presión, tracción) con autocierre automático para prevenir que se abran por fricción.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué indica la presencia de una costura de color diferente (generalmente roja) deshecha en la cinta del absorbedor de impacto de una eslinga?",
        "options": [
          "Que la eslinga fue mal fabricada.",
          "Que el conector ha sido sometido a una fuerza de caída y debe ser retirado de servicio inmediatamente (indicador de impacto activado).",
          "Que la eslinga se puede usar para cargas menores.",
          "Que necesita costura manual de refuerzo."
        ],
        "answer": 1,
        "feedback": "Correcto. Los absorbedores y arneses tienen costuras indicadoras de impacto. Si están rotas o expuestas, significa que el equipo ya detuvo una caída y perdió sus propiedades protectoras, por lo que debe desecharse.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es el criterio correcto de descarte de un arnés de seguridad respecto a las partes metálicas (argollas)?",
        "options": [
          "Que tengan suciedad o polvo superficial.",
          "La presencia de fisuras, deformaciones evidentes, corrosión profunda o desgaste superior al 10% del espesor original.",
          "Que las argollas sean plateadas en lugar de doradas.",
          "Que hagan ruido al moverse."
        ],
        "answer": 1,
        "feedback": "Correcto. Fisuras, deformaciones o corrosión severa reducen severamente la integridad del metal del anillo y obligan a destruir y descartar el arnés.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué tipo de casco de seguridad se debe exigir para trabajos en alturas?",
        "options": [
          "Cualquier gorra de plástico duro.",
          "Casco clase E o G con barbuquejo de 3 o 4 puntos de anclaje para evitar que se caiga de la cabeza del operario.",
          "Casco con visera ancha tipo sombrero sin correa de barbilla.",
          "Casco metálico pulido."
        ],
        "answer": 1,
        "feedback": "Correcto. El casco de altura debe poseer barbuquejo rígido de mínimo 3 puntos para mantenerse en su posición durante un bamboleo o caída, protegiendo el cráneo de golpes secundarios.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál de los siguientes agentes químicos provoca un daño invisible pero severo en las fibras de poliéster y nylon de los arneses de seguridad?",
        "options": [
          "Agua destilada.",
          "Exposición a vapores de ácidos fuertes (baterías, galvanizado) o solventes clorados, que degradan la poliamida sin cambiar drásticamente su color.",
          "Polvo de cemento seco.",
          "Grasa mineral ordinaria."
        ],
        "answer": 1,
        "feedback": "Correcto. Los vapores ácidos destruyen los enlaces poliméricos de las fibras sintéticas de los arneses a nivel microscópico, debilitándolos drásticamente. Deben almacenarse en sitios ventilados lejos de químicos.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Según el estándar de inspección de EPP, un arnés que ha cumplido 10 años desde su fabricación pero que nunca ha sido usado y se encuentra en su empaque original sellado en bodega debe:",
        "options": [
          "Aprobarse de inmediato debido a que está nuevo en caja.",
          "Retirarse de servicio y destruirse, ya que el fabricante establece una vida útil máxima de almacenamiento (normalmente 5 a 10 años) por degradación natural del polímero por el tiempo.",
          "Venderse a menor precio sin etiquetas.",
          "Hacerle una prueba de carga en bodega."
        ],
        "answer": 1,
        "feedback": "Correcto. Las fibras sintéticas envejecen por factores ambientales internos incluso empacadas. Superar la fecha de caducidad indicada por el fabricante (típicamente 10 años) es criterio de descarte absoluto.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la resistencia mínima certificada que debe soportar una línea de vida vertical de cuerda sintética?",
        "options": [
          "2,000 lbs (9 kN)",
          "3,600 lbs (16 kN) en los puntos extremos",
          "5,600 lbs (25 kN) o resistencia a la rotura conforme a normas ANSI/OSHA",
          "1,500 lbs (6.6 kN)"
        ],
        "answer": 2,
        "feedback": "Correcto. La cuerda de la línea de vida vertical (generalmente de 11-16mm) debe garantizar una resistencia nominal mínima muy alta para soportar fuerzas dinámicas extremas.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🦺 CASO DE ALMACENAMIENTO DE EPP: El supervisor EHS realiza una auditoría en la bodega de EPP contratista y observa que los arneses y eslingas se almacenan colgados en el mismo estante que los botes de ácido para limpieza de tuberías y disolventes de pintura. El bodeguero afirma que las botellas están bien cerradas.",
        "text": "¿Cuál debe ser la acción correctiva inmediata del supervisor?",
        "options": [
          "Solicitar que se ponga llave al estante.",
          "Suspender el uso de todos los arneses almacenados allí, enviarlos a cuarentena/destrucción, e implementar un área de almacenamiento de EPP exclusiva, seca y ventilada, separada de químicos.",
          "Pintar el estante con pintura epóxica para neutralizar los vapores.",
          "Dar de baja al bodeguero."
        ],
        "answer": 1,
        "feedback": "Correcto. El riesgo de degradación ácida de las fibras por vapores imperceptibles es inaceptable. Los arneses expuestos a vapores corrosivos deben destruirse de inmediato por seguridad.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏗️ CASO DE MODIFICACIÓN DE EQUIPOS: Un operario de montaje mecánico encuentra que el conector de su eslinga de posicionamiento no alcanza a rodear una columna ancha. Utiliza una eslinga adicional y une los dos ganchos entre sí para duplicar la longitud.",
        "text": "¿Qué evaluación técnica merece esta acción?",
        "options": [
          "Es una buena práctica que muestra proactividad e ingenio.",
          "Es una práctica crítica prohibida; la unión directa de ganchos (gancho a gancho) puede causar desenganche accidental (roll-out) o concentrar cargas laterales para las que el cierre del gancho no está diseñado, resultando en ruptura.",
          "Es seguro siempre que se use cinta aislante para asegurar los ganchos.",
          "No afecta la resistencia si los conectores son de la misma marca."
        ],
        "answer": 1,
        "feedback": "Correcto. Conectar ganchos directamente entre sí (o sobre la misma cuerda en forma de lazo sin anillo) está prohibido por riesgo de roll-out, donde las fuerzas de rotación fuerzan la compuerta y abren el pestillo.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué parte de un arnés de seguridad está diseñada específicamente para conectar el sistema de detención de caídas de forma segura?",
        "options": [
          "La argolla en forma de D en la zona pectoral lateral.",
          "La argolla dorsal en forma de D localizada entre los omóplatos.",
          "Las argollas laterales de la cintura.",
          "La correa de ajuste del pecho directamente."
        ],
        "answer": 1,
        "feedback": "Correcto. La argolla dorsal es el punto estándar y obligatorio para los sistemas de detención de caídas corporales, distribuyendo el impacto de frenado equitativamente.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué significa que una eslinga o conector cuente con la marca 'ANSI Z359'?",
        "options": [
          "Que fue fabricado en el año 359.",
          "Que cumple con las normas técnicas de diseño, resistencia y pruebas de la Asociación Americana de Estándares Nacionales para protección anticaídas.",
          "Que tiene garantía extendida por accidentes de tráfico.",
          "Que está hecha de una aleación metálica tipo Z."
        ],
        "answer": 1,
        "feedback": "Correcto. La certificación ANSI Z359 garantiza que el conector ha sido sometido a ensayos de laboratorio rigurosos y resiste cargas estructurales críticas.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_15",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al inspeccionar un arnés, se detecta que la etiqueta plástica que contiene el número de serie y la fecha de fabricación está ilegible debido al desgaste por lodo. ¿Cuál es el procedimiento normativo?",
        "options": [
          "Escribirle un número serial ficticio con marcador permanente y seguir usándolo.",
          "Retirar el arnés de servicio para descarte permanente, ya que no se puede garantizar su trazabilidad, vida útil ni fecha de inspección anual obligatoria.",
          "Seguir usándolo bajo la palabra de confianza del operario sobre su antigüedad.",
          "Pegarle una etiqueta de otro arnés viejo."
        ],
        "answer": 1,
        "feedback": "Correcto. La pérdida de legibilidad de las etiquetas del fabricante anula la trazabilidad del EPP, lo cual es causal de descarte inmediato en auditorías de SST.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_16",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la resistencia mínima exigida específicamente a la compuerta o pestaña de cierre de los ganchos de seguridad bajo la norma ANSI Z359.12?",
        "options": [
          "1,000 lbs (4.4 kN)",
          "3,600 lbs (16 kN) de resistencia a la carga lateral en la compuerta",
          "5,000 lbs (22 kN)",
          "500 lbs (2.2 kN)"
        ],
        "answer": 1,
        "feedback": "Correcto. ANSI actualizó la norma para exigir que la compuerta del gancho soporte al menos 3,600 libras en carga lateral para mitigar el riesgo de ruptura por roll-out.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_17",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Se planea usar un arnés dieléctrico. ¿Qué material de aislamiento recubre típicamente sus componentes metálicos?",
        "options": [
          "Pintura epóxica ordinaria.",
          "Un recubrimiento de polímero de alta resistencia (vinilo o poliuretano) libre de fisuras que aísla de descargas eléctricas de hasta 9 kV o más.",
          "Cinta aislante negra.",
          "Un barniz acrílico transparente."
        ],
        "answer": 1,
        "feedback": "Correcto. Las argollas de los arneses dieléctricos están revestidas con polímeros especiales libres de burbujas de aire para evitar la conducción eléctrica.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_18",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Para qué se utilizan los anillos en D laterales de un arnés de seguridad?",
        "options": [
          "Para anclar la línea de vida con absorbedor de impacto.",
          "Para sistemas de restricción y posicionamiento en el puesto de trabajo únicamente.",
          "Para colgar bolsas de herramientas pesadas.",
          "Para enganchar un sistema de descenso de rescate rápido en vertical."
        ],
        "answer": 1,
        "feedback": "Correcto. Las argollas de la cintura están diseñadas para conectores de posicionamiento o restricción de movimiento, nunca para detención de caídas libres.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_19",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué porcentaje de resistencia nominal pierde aproximadamente un conector textil (eslinga o arnés) al presentar una quemadura de cigarrillo o chispa de soldadura pequeña?",
        "options": [
          "5%",
          "20%",
          "Hasta un 50% o más de su resistencia estructural debido a la fusión interna de las fibras sintéticas de nylon",
          "No pierde resistencia significativamente"
        ],
        "answer": 2,
        "feedback": "Correcto. Una pequeña quemadura funde localmente miles de microfilamentos sintéticos de nylon, comprometiendo gravemente la capacidad de detención dinâmica. Es criterio inmediato de descarte.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      },
      {
        "id": "alturas_epp_20",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏗️ CASO DE REVISIÓN DE EQUIPOS: Un inspector de EHS encuentra a un operario utilizando un arnés de cuerpo completo. Al revisar las correas pectorales, nota que el operario las pasa por debajo de sus brazos en lugar de sobre el pecho porque 'le aprieta mucho al caminar'.",
        "text": "¿Qué riesgo grave asume el operario en caso de caída?",
        "options": [
          "Que el arnés se ensucie con grasa corporal.",
          "Que en una caída de cabeza el cuerpo se deslice por gravedad fuera del arnés (deslizamiento total) o que sufra asfixia inmediata por presión del arnés contra las axilas y vías respiratorias.",
          "Ninguno, las correas pectorales son secundarias.",
          "Que se desajuste el calzado de seguridad."
        ],
        "answer": 1,
        "feedback": "Correcto. La colocación inadecuada de las correas permite que las fuerzas cinéticas expulsen el cuerpo del arnés o que las correas opriman el tórax y cuello, causando asfixia traumática.",
        "reference": "NOM-009-STPS-2011, Artículo 20 / ANSI Z359.11 / ANSI Z359.12",
        "competencies": [
          "Inspección de EPP",
          "Especificaciones Técnicas"
        ]
      }
    ],
    "modulo4_procedimientos": [
      {
        "id": "alturas_proc_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el primer paso obligatorio antes de iniciar cualquier labor de altura según los PTS estándar?",
        "options": [
          "Conectar el arnés al anclaje.",
          "Elaborar y firmar el Análisis de Trabajo Seguro (ATS) y el Permiso de Trabajo en Alturas.",
          "Subir las herramientas al andamio.",
          "Medir la velocidad del viento con anemómetro de bolsillo."
        ],
        "answer": 1,
        "feedback": "Correcto. La planificación documental in situ (ATS + Permiso firmado por el Coordinador) es obligatoria y previa al inicio de la labor.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "En la delimitación del área para trabajos en altura, ¿qué color de cinta o barrera se debe usar para restringir el acceso a la proyección de caída de objetos?",
        "options": [
          "Verde",
          "Rojo o Amarillo con negro según demarcación de seguridad",
          "Blanco",
          "Cinta azul"
        ],
        "answer": 1,
        "feedback": "Correcto. La delimitación física de la zona de caída potencial en el nivel inferior se hace con cintas rojas/amarillas o barreras rígidas para proteger a peatones.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué porcentaje de inclinación segura debe tener una escalera portátil apoyada contra una pared?",
        "options": [
          "Relación 1:1 (45 grados)",
          "Relación 4:1 (por cada 4 metros de altura, separar 1 metro la base de la pared, aprox 75 grados)",
          "Relación 2:1",
          "Totalmente vertical a 90 grados"
        ],
        "answer": 1,
        "feedback": "Correcto. La regla 4:1 o de los 75° proporciona la máxima estabilidad de soporte, evitando el deslizamiento de la base o el volteo hacia atrás.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al trabajar sobre un andamio multidireccional certificado, la conexión de la línea de vida del trabajador se debe hacer a:",
        "options": [
          "Las barandas de protección del andamio únicamente.",
          "Un punto de anclaje certificado independiente de la estructura del andamio o a los montantes del andamio diseñados y aprobados por el fabricante para tal fin.",
          "Cualquier cruceta diagonal del andamio.",
          "La plataforma metálica donde se apoya."
        ],
        "answer": 1,
        "feedback": "Correcto. Salvo que el andamio cuente con puntos certificados integrados por diseño, el trabajador debe anclarse a una línea o estructura externa para evitar caer si el andamio colapsa.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuántas personas pueden subir simultáneamente por una escalera portátil sencilla?",
        "options": [
          "Una sola persona",
          "Dos personas si pesan poco",
          "Hasta tres si están ancladas",
          "Ninguna, solo es para herramientas"
        ],
        "answer": 0,
        "feedback": "Correcto. Las escaleras portátiles de mano son de uso individual exclusivo. Subir dos personas compromete severamente la carga y estabilidad de la escalera.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al operar una Plataforma Elevadora Móvil de Personal (PEMP / Manlift), es obligatorio que el operador esté:",
        "options": [
          "Anclado a una línea de vida vertical externa.",
          "Anclado mediante una eslinga de restricción al punto de anclaje certificado dentro de la canastilla de la plataforma.",
          "Sujeto con un cinturón simple a la baranda exterior.",
          "Sin ningún EPP anticaídas para facilitar movimientos rápidos."
        ],
        "answer": 1,
        "feedback": "Correcto. El conector de restricción corto en la canastilla previene que el operador sea catapultado fuera de la plataforma por rebotes o desplazamientos bruscos del equipo.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué elemento es obligatorio instalar en la base de un andamio para garantizar estabilidad en terrenos irregulares?",
        "options": [
          "Ladrillos o maderas sueltas",
          "Tornillos niveladores ajustables sobre placas base sólidas",
          "Llantas de hule de repuesto",
          "Bolsas de arena sueltas"
        ],
        "answer": 1,
        "feedback": "Correcto. Los tornillos niveladores permiten ajustar la verticalidad perfecta del andamio y distribuir las cargas al suelo firme mediante placas de acero.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Durante el izaje de personas en canastas suspendidas por grúas móviles, ¿qué control administrativo especial se requiere?",
        "options": [
          "Ninguno especial, solo el ATS ordinario.",
          "Un plan de izaje crítico, un permiso de trabajo especial firmado por el gerente de planta, grúa con certificación de personal y sistema anticaídas independiente para los tripulantes.",
          "Certificado médico únicamente.",
          "Charla de seguridad de 2 horas."
        ],
        "answer": 1,
        "feedback": "Correcto. El izaje de personas con grúa es un procedimiento crítico de muy alto riesgo. Exige planes rigurosos, certificación del equipo de elevación para personal y anclajes independientes directos a la línea de vida.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué establece el procedimiento de seguridad respecto al uso de escaleras de extensión portátiles sobre andamios montados?",
        "options": [
          "Se permite si se requiere ganar 2 metros adicionales de forma rápida.",
          "Está estrictamente prohibido colocar escaleras o andamios secundarios sobre la plataforma de un andamio para ganar altura, por riesgo de volcamiento y colapso de cargas.",
          "Se permite únicamente si el andamio tiene llantas con freno.",
          "Se permite si el Coordinador sostiene la escalera con sus manos."
        ],
        "answer": 1,
        "feedback": "Correcto. Apoyar escaleras sobre andamios altera drásticamente el centro de gravedad e incrementa la carga concentrada local, pudiendo colapsar la estructura del andamio.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "En un permiso de alturas, ¿cuál es la vigencia temporal máxima que se le puede otorgar legalmente por turno?",
        "options": [
          "Toda la semana",
          "Un mes",
          "La duración máxima del turno de trabajo de la jornada diaria (normalmente 8 a 12 horas)",
          "Hasta que se termine el proyecto"
        ],
        "answer": 2,
        "feedback": "Correcto. El permiso tiene validez únicamente por la jornada diaria de trabajo o turno, debido a que las condiciones ambientales, de personal y del sitio pueden variar drásticamente de un día a otro.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏗️ CASO DE MONTAJE DE ANDAMIO: Se solicita montar un andamio multidireccional de 12 metros de altura en el patio exterior para pintar la fachada. El suelo es de adoquín de jardín húmedo. El supervisor del contratista propone apoyar las placas base de los tornillos niveladores directamente sobre el adoquín húmedo para agilizar el montaje.",
        "text": "Como supervisor EHS, ¿qué corrección técnica debe exigir?",
        "options": [
          "Ninguna, el adoquín es lo suficientemente rígido.",
          "Exigir el uso de tablones de madera sólida de mínimo 5 cm de espesor y longitud adecuada (durmientes) debajo de las placas base para distribuir la carga del andamio sobre el suelo y evitar asentamientos diferenciales destructivos.",
          "Permitir el montaje si pintan las bases de verde.",
          "Exigir vaciar concreto en el jardín antes de armar."
        ],
        "answer": 1,
        "feedback": "Correcto. Colocar bases directamente en suelos blandos o húmedos sin durmientes que distribuyan el peso provoca hundimientos en una pata, desestabilizando y colapsando el andamio entero.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "⚡ CASO DE TRABAJO EN POSTE: Un operario debe cambiar luminarias exteriores en un poste metálico de 9 metros apoyando una escalera de extensión. El poste está ubicado a 2.5 metros de una línea eléctrica de distribución aérea de 13.2 kV. El contratista propone usar una escalera de aluminio ligera de extensión de 10 metros.",
        "text": "Identifique el error fatal en el procedimiento y proponga la corrección:",
        "options": [
          "La escalera es muy larga y sobresale.",
          "El uso de escalera de aluminio (conductor) a menos de la distancia de seguridad de líneas energizadas (3.0 metros mínimo para media tensión) genera riesgo inminente de arco eléctrico mortal. Se debe exigir escalera de fibra de vidrio y mantener las distancias de aproximación.",
          "No hay error; el aluminio disipa la estática.",
          "Exigir que el trabajador suba descalzo para hacer polo a tierra."
        ],
        "answer": 1,
        "feedback": "Correcto. El aluminio conduce electricidad instantáneamente. Además del material de fibra no conductor, se deben respetar los límites de aproximación segura definidos por normas eléctricas (RETIE/NOM-029).",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué significa que un sistema de andamios cuente con 'rodapiés'?",
        "options": [
          "Zapatos especiales para el andamio.",
          "Barreras de protección de borde de al menos 9 cm de altura en la base de la plataforma para impedir la caída accidental de herramientas u objetos hacia el nivel inferior.",
          "Llantas de goma en las patas.",
          "Un manual de armado rápido en la base."
        ],
        "answer": 1,
        "feedback": "Correcto. El rodapié evita el rodamiento involuntario de herramientas, pernos o tuberías por el borde de las plataformas del andamio.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al subir o bajar por una escalera fija o de mano, el trabajador debe cumplir la regla de los:",
        "options": [
          "Dos puntos de contacto.",
          "Tres puntos de contacto (dos manos y un pie, o dos pies y una mano apoyados en la escalera en todo momento).",
          "Cuatro puntos de contacto obligatorios.",
          "Ninguno, puede subir corriendo."
        ],
        "answer": 1,
        "feedback": "Correcto. Mantener tres puntos de apoyo garantiza que el centro de gravedad del cuerpo permanezca adherido a la escalera, minimizando deslizamientos y caídas.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_15",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es la función del 'Permiso de Trabajo en Alturas'?",
        "options": [
          "Cobrar un impuesto de ingreso a la planta.",
          "Un documento de verificación de controles y autorización formal que certifica que el área de trabajo y el personal cumplen con los requisitos de seguridad antes de iniciar.",
          "Un registro de asistencia a la charla técnica.",
          "Un seguro de vida adicional contratado."
        ],
        "answer": 1,
        "feedback": "Correcto. El permiso actúa como un checklist interactivo y una autorización de seguridad que valida que las condiciones operativas reales son seguras.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_16",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Al instalar andamios de más de 4 metros de altura o andamios suspendidos, ¿qué requisito adicional es obligatorio?",
        "options": [
          "Un plano de la ciudad.",
          "Diseño de ingeniería con memoria de cálculo estructural firmado por Persona Calificada y plan escrito de montaje y desmontaje por Coordinador.",
          "Pintar el andamio con pintura reflectante.",
          "Autorización del sindicato local."
        ],
        "answer": 1,
        "feedback": "Correcto. Andamios altos o con configuraciones colgantes complejas requieren un riguroso análisis estructural ingenieril para prevenir colapsos por sobrecarga o viento.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_17",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿A qué altura máxima de seguridad sobre el suelo se permite el uso de escaleras portátiles sencillas de mano para labores menores?",
        "options": [
          "10 metros",
          "5 metros",
          "No hay límite de altura.",
          "Hasta 20 metros si está apoyada."
        ],
        "answer": 1,
        "feedback": "Correcto. Las escaleras portátiles de mano son sistemas de tránsito rápido o para tareas muy ligeras de corta duración a alturas moderadas (máximo 5m ordinarios).",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_18",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene cronológicamente los pasos correctos para el montaje seguro de un andamio multidireccional certificado:",
        "items": [
          "Asegurar el área inferior delimitando la proyección con cinta y señalización.",
          "Colocar durmientes de madera y los tornillos niveladores sobre placas base firmes.",
          "Montar la base (iniciadores, verticales, horizontales y nivelar con nivel de burbuja).",
          "Subir y colocar las plataformas metálicas de trabajo y asegurar los pasadores.",
          "Instalar los barandales de seguridad (superior e intermedio) y los rodapiés antes de continuar al siguiente cuerpo."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. Delimitar ➔ Durmientes y Niveladores ➔ Montaje base y nivelación ➔ Plataformas ➔ Barandales y Rodapiés. La seguridad perimetral y la base firme son críticas antes de elevar cargas.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_19",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "El supervisor EHS detecta que el andamio no tiene instalada la 'tarjeta de andamio'. ¿Qué significa esto en la práctica?",
        "options": [
          "Que no se pagó el alquiler del andamio.",
          "Que el andamio no ha sido inspeccionado ni aprobado para su uso seguro; debe prohibirse el acceso al andamio inmediatamente (tarjeta roja latente).",
          "Que falta el nombre del fabricante del equipo.",
          "Que el andamio es de segunda mano."
        ],
        "answer": 1,
        "feedback": "Correcto. La tarjeta (verde = aprobado, roja = peligro/no usar) es el indicador físico que informa si el andamio cuenta con inspección diaria favorable por el Coordinador.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      },
      {
        "id": "alturas_proc_20",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene el flujo correcto de autorización y cierre de un Permiso de Trabajo en Alturas:",
        "items": [
          "Inspeccionar el área in situ e identificar los peligros específicos del día.",
          "Firmar el ATS y el Permiso por el Emisor (Coordinador) y los Ejecutantes autorizados.",
          "Ejecutar la tarea bajo supervisión continua aplicando los controles.",
          "Realizar orden y aseo en el área (retirar equipos, herramientas e izar elementos).",
          "Cerrar formalmente el permiso y archivar el documento en el sistema de control de SST."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. Inspección previa ➔ Firma formal ➔ Ejecución controlada ➔ Limpieza y orden ➔ Cierre formal y archivo. El permiso no se cierra hasta que el área quede limpia y despejada.",
        "reference": "NOM-009-STPS-2011, Artículo 17 y 19 / OSHA 1926.502",
        "competencies": [
          "Procedimientos Operativos",
          "Plan de Trabajo Seguro"
        ]
      }
    ],
    "modulo5_rescate": [
      {
        "id": "alturas_resc_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué es el 'Síndrome de Suspensión' o 'Trauma por Suspensión'?",
        "options": [
          "El pánico que siente un trabajador al mirar al suelo desde lo alto.",
          "El colapso circulatorio que ocurre cuando un trabajador permanece inmóvil suspendido en arnés, acumulándose la sangre en las piernas por falta de retorno venoso.",
          "El dolor de cabeza provocado por el ruido de la planta.",
          "La fatiga acumulada tras 8 horas de labor."
        ],
        "answer": 1,
        "feedback": "Correcto. También conocido como síndrome de arnés. Al no haber contracción de piernas, la sangre se acumula en extremidades inferiores (secuestro hemático), lo que reduce el flujo cardíaco y cerebral, pudiendo causar la muerte en minutos (entre 10 a 20 minutos).",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el tiempo máximo recomendado por las guías médicas y de rescate para bajar a un trabajador suspendido e inconsciente antes de que sufra daño cerebral grave?",
        "options": [
          "60 minutos",
          "45 minutos",
          "15 minutos o menos",
          "2 horas"
        ],
        "answer": 2,
        "feedback": "Correcto. Se debe bajar al trabajador lo más rápido posible. Pasados los 15 minutos, el secuestro de sangre puede provocar choque hipovolémico y muerte inminente por trauma de suspensión.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué elemento del arnés o accesorio puede usar un trabajador suspendido conscientemente para retrasar los efectos del síndrome de arnés?",
        "options": [
          "Argollas pectorales dieléctricas.",
          "Cintas de alivio de trauma (trauma straps) o estribos que permiten apoyar los pies y flexionar los músculos de las piernas.",
          "Un mosquetón adicional en la cintura.",
          "Ninguno, debe permanecer colgado e inmóvil."
        ],
        "answer": 1,
        "feedback": "Correcto. Las cintas de trauma permiten al operario pararse en los estribos, activando la bomba muscular venosa de las pantorrillas para restaurar el retorno venoso al corazón.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En un plan de rescate en alturas, la primera acción inmediata del brigadista de rescate es:",
        "options": [
          "Llamar al gerente general.",
          "Activar el plan de emergencias de la planta y notificar inmediatamente a los servicios de rescate médico.",
          "Subir a la estructura corriendo sin equipos.",
          "Tomar fotos para documentar el caso."
        ],
        "answer": 1,
        "feedback": "Correcto. La activación temprana de la brigada y de emergencias médicas (dentro del primer minuto) es vital para contar con soporte médico calificado in situ durante el descenso.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué posición corporal se debe dar preferentemente a un rescatado que estuvo colgado inconsciente por más de 10 minutos, inmediatamente después de descenderlo?",
        "options": [
          "Acostarlo boca abajo en el suelo de inmediato.",
          "Posición semisentada (cuerpo inclinado a unos 30-45 grados) por al menos 30 minutos, para evitar la sobrecarga masiva de sangre sin oxígeno al corazón (síndrome de reflujo).",
          "Mantenerlo de pie sosteniéndolo por los hombros.",
          "Acostarlo con las piernas elevadas por encima de la cabeza."
        ],
        "answer": 1,
        "feedback": "Correcto. Poner plano a un rescatado de inmediato puede causar un paro cardíaco súbito por retorno masivo de sangre desoxigenada y ácida acumulada en las piernas hacia el miocardio (muerte de rescate).",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es el equipamiento mínimo obligatorio para un rescatista autorizado de altura?",
        "options": [
          "Solo su arnés básico.",
          "Arnés de cuerpo completo clase 3, casco con barbuquejo, sistema de descenso mecánico controlado, cuerdas semiestáticas certificadas, y botiquín de primeros auxilios.",
          "Un megáfono y linterna.",
          "Una red de circo amortiguadora."
        ],
        "answer": 1,
        "feedback": "Correcto. El rescatista requiere equipo especializado certificado de descenso y rescate. Nunca debe improvisar poleas ni cuerdas no idóneas.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Un 'Autorrescate' se define como:",
        "options": [
          "Cuando la aseguradora cubre los gastos de rescate.",
          "La capacidad del propio trabajador de descender de forma autónoma usando dispositivos de descenso autoevacuación integrados en su línea de vida.",
          "Esperar pacientemente a que lleguen los bomberos.",
          "Cortar la cuerda del arnés con una navaja."
        ],
        "answer": 1,
        "feedback": "Correcto. El autorrescate es el método más rápido e ideal si el trabajador está consciente y cuenta con equipos específicos de descenso autónomo.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Durante un rescate asistido en una viga metálica donde el trabajador está inconsciente, el rescatista debe:",
        "options": [
          "Saltar hacia el trabajador para ganar tiempo.",
          "Asegurarse de estar anclado a un punto de anclaje independiente al del accidentado y usar un bloqueador mecánico o polea con sistema de ventaja mecánica para izar y desenganchar al operario.",
          "Desconectar la línea de vida del operario sin anclarlo previamente a su sistema de descenso.",
          "Llevarlo en la espalda mientras desciende por la escalera portátil."
        ],
        "answer": 1,
        "feedback": "Correcto. El rescatista nunca debe transferir cargas al accidentado sin asegurar primero el sistema de descenso mecánico del rescatado y su propio punto de anclaje independiente de seguridad.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Por qué se prohíbe el uso de cuerdas dinámicas de escalada deportiva en sistemas de rescate industrial en altura?",
        "options": [
          "Porque son muy costosas.",
          "Porque tienen demasiada elongación (elasticidad del 10% al 40%), lo que dificulta controlar los movimientos del rescatado durante el izaje y genera rebotes peligrosos contra estructuras.",
          "Porque son de colores muy llamativos.",
          "Porque no resisten la intemperie."
        ],
        "answer": 1,
        "feedback": "Correcto. Las cuerdas semiestáticas son las reglamentarias en la industria, ya que su baja elasticidad (<5%) permite un control preciso de la carga y el descenso sin rebotes.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Según el estándar internacional, todos los miembros de la brigada de rescate en alturas deben:",
        "options": [
          "Haber visto un video instructivo en internet.",
          "Estar aptos médicamente para alturas, certificados anualmente y realizar simulacros de rescate reales periódicamente.",
          "Ser ingenieros de planta exclusivamente.",
          "Tener seguro contra accidentes de aviación."
        ],
        "answer": 1,
        "feedback": "Correcto. La formación técnica práctica periódica y el simulacro anual son obligatorios para garantizar la destreza y rapidez críticas en rescates reales.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🚨 CASO DE EMERGENCIA EN ALTURA: Un instalador de estructuras a 10 metros sufre una caída libre que es detenida por su línea de vida. Queda colgado inconsciente y boca abajo. El Coordinador de alturas in situ no cuenta con un kit de rescate preensamblado y decide improvisar un polipasto con cuerdas de nylon del contratista y amarrar al trabajador por las piernas para bajarlo.",
        "text": "Identifique las fallas graves del Coordinador y la consecuencia latente:",
        "options": [
          "El nylon no resiste; el accidentado se despertará enojado.",
          "Improvisar equipos no certificados y descender colgado por las piernas agrava mortalmente el secuestro hemático de sangre e incrementa el trauma cefálico. Debió usar un kit de rescate certificado, bajarlo en posición semivertical y mantenerlo semisentado.",
          "La única falla es no tener permiso escrito del departamento de compras para el kit.",
          "Se debió esperar 3 horas a que llegara una plataforma elevadora."
        ],
        "answer": 1,
        "feedback": "Correcto. La improvisación de sistemas de ventaja mecánica y el manejo inadecuado de la posición del cuerpo colgado anulan el propósito de preservación de la vida, pudiendo causar asfixia o paros letales in situ.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_12",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene cronológicamente los pasos críticos del protocolo de rescate asistido en alturas para un trabajador suspendido inconsciente:",
        "items": [
          "Activar plan de emergencias interno, notificar brigada de rescate y solicitar ambulancia medicalizada.",
          "Rescatista equipado accede de forma segura usando línea de vida y se ancla a un punto independiente.",
          "Conectar el sistema de descenso mecánico al anillo dorsal del accidentado e izarlo ligeramente para liberar su conector tensionado original.",
          "Descender suavemente al accidentado de forma controlada hacia una zona de seguridad despejada.",
          "Colocar al paciente en posición semisentada (30°-45°), liberarlo del arnés y prestar primeros auxilios monitoreando constantes vitales."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. Activación de alarma ➔ Acceso seguro del rescatista ➔ Elevación y liberación del conector ➔ Descenso controlado ➔ Posición semisentada y soporte médico. El flujo garantiza tiempos mínimos y control fisiológico.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el método principal para verificar que un plan de rescate en alturas realmente funciona en la empresa?",
        "options": [
          "Leer el manual del plan de emergencias una vez al año.",
          "Realizar simulacros prácticos periódicos evaluando tiempos de respuesta y destreza técnica.",
          "Asistir a una conferencia teórica sobre rescates.",
          "Hacer firmar una lista de asistencia a los trabajadores."
        ],
        "answer": 1,
        "feedback": "Correcto. Los simulacros prácticos permiten afinar la coordinación de la brigada y detectar fallas en los kits antes de una emergencia real.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "El dispositivo de descenso controlado (como un ID de Petzl u ocho con orejas) funciona basándose en el principio de:",
        "options": [
          "Frenado electromagnético por fricción inducida.",
          "Fricción mecánica regulable de la cuerda que pasa a través del equipo, disipando la energía cinética del cuerpo en forma de calor.",
          "Tensión elástica regulada.",
          "Un motor eléctrico integrado."
        ],
        "answer": 1,
        "feedback": "Correcto. Los descensores mecánicos disipan la velocidad controlando el rozamiento de la cuerda, permitiendo al operador regular la velocidad de descenso manual.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      },
      {
        "id": "alturas_resc_15",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué es el 'síndrome de reflujo' o choque de sobrecarga cardíaca en el contexto del rescate?",
        "options": [
          "El dolor estomacal del rescatista.",
          "La falla cardíaca aguda provocada al acostar plano de inmediato a un suspendido, retornando bruscamente sangre ácida y sin oxígeno acumulada en piernas hacia la aurícula derecha.",
          "La asfixia por vómito durante el descenso.",
          "La pérdida de consciencia al subir a alturas."
        ],
        "answer": 1,
        "feedback": "Correcto. Poner acostado al accidentado inmediatamente después de rescatarlo inunda el corazón de sangre rica en potasio y ácido láctico acumulada en sus miembros, induciendo fibrilación ventricular mortal.",
        "reference": "NOM-009-STPS-2011, Artículo 44 / OSHA 1926.503",
        "competencies": [
          "Rescate y Emergencias",
          "Primeros Auxilios"
        ]
      }
    ]
  },
  "supervisorEHS": {
    "modulo1_roles": [
      {
        "id": "ehs_roles_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el objetivo principal del rol del supervisor de EHS en campo?",
        "options": [
          "Llenar formatos para evitar auditorías legales.",
          "Actuar como facilitador y asesor técnico para integrar la cultura de seguridad en los procesos operativos de campo, protegiendo vidas y recursos.",
          "Sancionar económicamente a todos los operarios que cometan errores.",
          "Acelerar la productividad omitiendo revisiones administrativas."
        ],
        "answer": 1,
        "feedback": "Correcto. El supervisor moderno de EHS no es un 'policía' punitivo, sino un socio estratégico facilitador que empodera y guía a los operarios en prácticas seguras.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es la función legal básica de la Comisión de Seguridad e Higiene (COSH) en México u organismo similar (COSH (Comisión de Seguridad e Higiene) en México)?",
        "options": [
          "Calcular los sueldos del personal de planta.",
          "Investigar las causas de los accidentes, proponer medidas preventivas y vigilar el cumplimiento normativo en el centro de trabajo.",
          "Organizar las celebraciones anuales de la empresa.",
          "Aprobar los presupuestos de producción del año."
        ],
        "answer": 1,
        "feedback": "Correcto. Las comisiones mixtas vigilan la aplicación de las normativas de SST de forma conjunta entre representantes patronales y de los trabajadores.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué ley o código nacional establece la obligación del empleador de garantizar condiciones seguras en el trabajo?",
        "options": [
          "Ley Federal del Trabajo (México) / Ley Federal del Trabajo (México)",
          "Código de Tránsito Terrestre",
          "Ley General de Educación",
          "Código Civil Comercial únicamente"
        ],
        "answer": 0,
        "feedback": "Correcto. El marco legal laboral supremo establece la obligación patronal directa de prevención, protección de la vida y pago de indemnizaciones.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Ante un accidente laboral mortal en la planta por negligencia en el control del riesgo, ¿qué tipo de responsabilidad puede enfrentar DIRECTAMENTE el supervisor EHS penalmente?",
        "options": [
          "Ninguna, la responsabilidad penal es exclusiva del dueño legal de la empresa.",
          "Responsabilidad por homicidio culposo o preterintencional derivado de omisión del deber de cuidado o negligencia profesional en la supervisión.",
          "Solo despido sin indemnización.",
          "Responsabilidad mercantil solidaria únicamente."
        ],
        "answer": 1,
        "feedback": "Correcto. La negligencia penal u omisión del deber de cuidado recae en los profesionales a cargo del control técnico. El supervisor EHS puede ser imputado penalmente si omitió detener labores de riesgo inminente.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué significa el concepto de 'Facultad de Detención de Trabajos Inseguros' del supervisor EHS?",
        "options": [
          "El derecho a suspender labores únicamente a fin de mes.",
          "La autoridad e independencia técnica para detener cualquier operación en curso que represente un peligro grave e inminente para la vida o integridad física de las personas.",
          "El poder de sancionar al personal con multas económicas directas en efectivo.",
          "La capacidad de rescindir contratos laborales de forma autónoma."
        ],
        "answer": 1,
        "feedback": "Correcto. El supervisor EHS debe estar empoderado por la gerencia para detener de inmediato cualquier actividad crítica no controlada, sin represalias operativas.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cada cuánto tiempo debe sesionar formalmente la Comisión de Seguridad e Higiene según la NOM-019-STPS?",
        "options": [
          "Semanalmente",
          "Al menos una vez al mes",
          "Anualmente",
          "Solo cuando ocurra un accidente grave"
        ],
        "answer": 1,
        "feedback": "Correcto. La NOM-019 mexicana (y leyes similares en Latam) estipulan reuniones mensuales obligatorias con sus respectivas actas y recorridos de verificación.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué es el documento DC-3 en el contexto laboral mexicano de la STPS?",
        "options": [
          "Un reporte de accidente leve.",
          "La Constancia de Competencias o Habilidades Laborales que acredita que el trabajador completó con éxito una capacitación de SST reglamentaria.",
          "Una bitácora de entrega de EPP.",
          "El acta de constitución de la comisión."
        ],
        "answer": 1,
        "feedback": "Correcto. El DC-3 es el formato oficial mexicano que acredita las competencias en seguridad y salud requeridas para trabajos peligrosos.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Un gerente de producción ordena a su personal realizar una tarea dentro de un espacio confinado sin monitoreo de gases porque 'el equipo de medición está descalibrado y hay prisa'. El supervisor EHS se entera.",
        "options": [
          "Hacerse a un lado para no tener problemas con el gerente de producción.",
          "Detener in situ la tarea, notificar formalmente a la gerencia general el peligro inminente (asfixia/explosión) y exigir la calibración del equipo antes de emitir el permiso.",
          "Aprobar el trabajo bajo la promesa de que el gerente asumirá la culpa si algo pasa.",
          "Permitir el ingreso si el trabajador aguanta la respiración."
        ],
        "answer": 1,
        "feedback": "Correcto. Ante un peligro de espacio confinado no monitoreado, el supervisor EHS debe ejercer su autoridad de parada técnica del trabajo de inmediato. La vida de los operarios está por encima de metas operativas.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "En una demanda de responsabilidad civil objetiva por un accidente de trabajo grave, ¿qué tipo de pruebas son las más valiosas que debe aportar el supervisor EHS para defender el cumplimiento de la empresa?",
        "options": [
          "Testimonios verbales de los gerentes de área.",
          "Documentos firmados: registro pre-uso de EPP, ATS y Permiso específico, DC-3/Certificados vigentes, evidencias de auditorías, y actas mensuales de la COSH.",
          "Las pólizas de seguro generales del corporativo.",
          "Un reporte de costos de producción."
        ],
        "answer": 1,
        "feedback": "Correcto. Las pruebas documentales fehacientes firmadas por los involucrados antes de la labor (registros pre-uso, capacitación, permisos) constituyen la defensa técnica del deber de cuidado.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la función del 'Diagnóstico de Seguridad y Salud en el Trabajo' establecido en la NOM-030-STPS?",
        "options": [
          "Llevar el historial médico de los trabajadores.",
          "Identificar las condiciones físicas peligrosas o inseguras, los agentes físicos, químicos o biológicos capaces de alterar la salud, y los requerimientos normativos aplicables al centro laboral.",
          "Un catálogo de los proveedores de equipo de protección.",
          "Un estudio de mercado sobre salarios de EHS."
        ],
        "answer": 1,
        "feedback": "Correcto. El diagnóstico de la NOM-030 es el mapa de ruta integral que evalúa los riesgos existentes para estructurar el Programa de SST de la empresa.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "⚖️ CASO DE RESPONSABILIDAD: Se produce una explosión en una caldera industrial operada por un contratista sin capacitación. Fallecen dos personas. El contratista alega que la caldera no tenía mantenimiento. La gerencia general de la contratante afirma que el supervisor EHS debió supervisar que el contratista tuviera sus registros en orden. El supervisor EHS argumenta que su horario laboral había terminado al momento del accidente.",
        "text": "¿Cómo evalúa un juzgado la responsabilidad legal del supervisor EHS?",
        "options": [
          "Lo exonera porque ocurrió fuera de su horario laboral.",
          "Evalúa la existencia de negligencia u omisión en la revisión previa del perfil del contratista, permisos firmados y avisos documentados de advertencia que el supervisor haya emitido. Su responsabilidad no se limita estrictamente a su horario si firmó permisos sin control previo.",
          "Traslada la culpa únicamente al fabricante de la caldera.",
          "La responsabilidad penal es exclusiva del soldador que armó la caldera."
        ],
        "answer": 1,
        "feedback": "Correcto. La responsabilidad legal por omisión se evalúa sobre las acciones previas de control técnico que correspondían a su cargo (validar competencias y emitir autorizaciones).",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📋 CASO DE CONTRATISTAS: Una empresa contrata a un proveedor externo para instalar ductos a 6 metros. El proveedor presenta planillas de pago de IMSS del mes pasado. El supervisor EHS detecta que dos de los linieros no aparecen en la planilla actual del contratista. El líder del contratista afirma que están en proceso de afiliación y que el trabajo urge.",
        "text": "¿Cuál es la decisión correcta del supervisor EHS?",
        "options": [
          "Permitir el ingreso si firman una carta de descargo donde eximan de responsabilidad a la empresa contratante.",
          "Negar terminantemente el ingreso y la ejecución del trabajo a los dos operarios no afiliados, exigiendo la constancia de afiliación y pago del mes en curso antes de emitir la autorización de trabajo.",
          "Permitir el trabajo si usan doble arnés de seguridad.",
          "Esperar al final de la jornada para solicitar la planilla en línea."
        ],
        "answer": 1,
        "feedback": "Correcto. Las cartas de descargo de responsabilidad civil y laboral son nulas de pleno derecho ante la ley. Permitir laborar sin afiliación activa en riesgos laborales expone a la empresa a multas graves y responsabilidad por accidentes.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál de los siguientes comités es obligatorio conformar en México para el Comisión de Seguridad e Higiene?",
        "options": [
          "Comité de compras generales.",
          "Comité Paritario de Seguridad y Salud en el Trabajo (COSH (Comisión de Seguridad e Higiene)).",
          "Comité de mantenimiento estético de la planta.",
          "Comité de control de finanzas corporativas."
        ],
        "answer": 1,
        "feedback": "Correcto. El COSH (Comisión de Seguridad e Higiene) es el organismo bipartito (empleador y trabajadores) mexicano responsable de la promoción y vigilancia de las normas de SST.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En México, la Ley Federal del Trabajo establece que los patrones deben constituir comisiones mixtas de:",
        "options": [
          "Capacitación, Adiestramiento y Productividad, y de Seguridad e Higiene.",
          "Compras internacionales y relaciones corporativas.",
          "Contratación masiva e innovación tecnológica.",
          "Solo de seguridad e higiene."
        ],
        "answer": 0,
        "feedback": "Correcto. La LFT exige tanto la Comisión Mixta de Capacitación y Adiestramiento como la de Seguridad e Higiene para proteger y formar a los trabajadores.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_15",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué implica la 'responsabilidad civil extracontractual' derivada de un accidente de trabajo?",
        "options": [
          "La obligación de reparar los daños y perjuicios causados a terceros (e.g. familiares o peatones) por negligencia, sin que medie un contrato directo.",
          "El pago de impuestos ambientales adicionales.",
          "La terminación inmediata de los contratos mercantiles de la planta.",
          "Una sanción del Ministerio de Hacienda."
        ],
        "answer": 0,
        "feedback": "Correcto. La responsabilidad extracontractual obliga a resarcir económicamente los daños morales y emergentes causados a personas indirectas afectadas por el siniestro.",
        "reference": "Ley Federal del Trabajo (México), Artículos 132, 134, 512 / NOM-030-STPS",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_roles_16",
        "difficulty": "facil",
        "type": "teorica",
        "text": "En caso de una evacuación de emergencia por sismo en la planta, ¿cuál es la responsabilidad principal del Supervisor EHS?",
        "options": [
          "Retirar los archivos confidenciales de la oficina administrativa.",
          "Asegurar que todas las personas evacuen de forma ordenada hacia el punto de reunión y apoyar al jefe de brigada en el conteo de personal.",
          "Permanecer adentro para verificar que la maquinaria quede apagada.",
          "Coordinar la atención de la prensa internacional."
        ],
        "answer": 1,
        "feedback": "Correcto. El Supervisor EHS debe dar soporte a los brigadistas, coordinar la evacuación segura hacia el punto de reunión y validar el censo para asegurar que no queden personas atrapadas.",
        "reference": "NOM-002-STPS-2010 (Prevención y protección contra incendios), Numeral 5.6",
        "competencies": [
          "Roles y Responsabilidades",
          "Respuesta a Emergencias"
        ]
      },
      {
        "id": "ehs_roles_17",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Bajo qué figura legal se puede delegar la firma de un permiso de trabajo caliente en ausencia del Supervisor EHS?",
        "options": [
          "Cualquier operario de la cuadrilla.",
          "A un 'Supervisor Delegado' previamente capacitado y designado por escrito por la alta dirección.",
          "Al guardia de seguridad de la entrada.",
          "No se puede delegar, la tarea debe cancelarse sin excepción."
        ],
        "answer": 1,
        "feedback": "Correcto. La delegación de autoridad en SST debe ser formal, constar por escrito y el designado debe contar con las mismas competencias de validación técnica que el titular.",
        "reference": "NOM-030-STPS-2009, Numeral 4.2",
        "competencies": [
          "Roles y Responsabilidades",
          "Delegación Legal"
        ]
      },
      {
        "id": "ehs_roles_18",
        "difficulty": "medio",
        "type": "caso",
        "scenario": "📋 CASO DE CONDUCTA: Un soldador subcontratado se niega reiteradamente a utilizar su careta de soldar argumentando que se empaña y no ve bien. El Supervisor EHS le ha llamado la atención verbalmente dos veces hoy.",
        "text": "¿Cuál es la acción correctiva administrativa que corresponde aplicar a continuación?",
        "options": [
          "Dejarlo trabajar ya que el trabajo es urgente y él es el único soldador calificado.",
          "Suspender el trabajo del soldador, notificar al contratista para su reemplazo o sanción, y registrar la amonestación por escrito conforme al reglamento interior de trabajo.",
          "Comprarle otra careta con dinero de la caja chica de la planta.",
          "Ignorar la situación y esperar a que el supervisor del contratista lo resuelva."
        ],
        "answer": 1,
        "feedback": "Correcto. La reincidencia en violaciones graves de seguridad requiere suspender la actividad y aplicar la escala de sanciones del reglamento interior de trabajo o del contrato con el contratista.",
        "reference": "Ley Federal del Trabajo, Artículo 47 (Causas de rescisión de la relación de trabajo sin responsabilidad para el patrón)",
        "competencies": [
          "Roles y Responsabilidades",
          "Disciplina Operativa"
        ]
      },
      {
        "id": "ehs_roles_19",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué documento legal emitido por la Secretaría del Trabajo de México debe validar obligatoriamente el Supervisor EHS para permitir el acceso de un contratista especializado a realizar labores en la planta?",
        "options": [
          "El acta constitutiva del contratista.",
          "El registro vigente del contratista ante el RIMSS/SaludE (Registro de Prestadoras de Servicios Especializados).",
          "La cédula profesional del dueño del contratista.",
          "Una carta de recomendación de otra empresa."
        ],
        "answer": 1,
        "feedback": "Correcto. El registro RIMSS/SaludE es un requisito legal obligatorio para subcontratación de servicios especializados. El contratante debe verificarlo para evitar sanciones solidarias fiscales y laborales.",
        "reference": "Ley Federal del Trabajo, Artículo 15",
        "competencies": [
          "Roles y Responsabilidades",
          "Gestión de Contratistas"
        ]
      },
      {
        "id": "ehs_roles_20",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "⚠️ CASO DE PRESIÓN OPERATIVA: El gerente de producción exige al Supervisor EHS firmar un permiso de trabajo en caliente en un área con vapores de pintura debido a un retraso de entrega de 100,000 USD. El gerente argumenta que ventilarán el área con abanicos industriales comunes.",
        "text": "¿Cuál es la decisión técnicamente correcta y éticamente responsable?",
        "options": [
          "Firmar el permiso bajo protesta anotando la inconformidad en una esquina.",
          "Negar la firma del permiso, detener la tarea y exigir la ventilación forzada con equipos intrínsecamente seguros (antiexplosión) y medición certificada de LEL <1% antes de firmar.",
          "Permitir el trabajo si el gerente firma una responsiva asumiendo toda la culpa en caso de explosión.",
          "Autorizar el trabajo solo por 15 minutos para minimizar la exposición."
        ],
        "answer": 1,
        "feedback": "Correcto. El Supervisor EHS representa la última barrera técnica. La presión operativa o el costo de retrasos jamás justifican un peligro inminente de explosión. Se requiere control de atmósfera explosiva verificado.",
        "reference": "Ley Federal del Trabajo, Artículo 512-B / NOM-005-STPS-1998, Numeral 5.2",
        "competencies": [
          "Roles y Responsabilidades",
          "Liderazgo Preventivo"
        ]
      }
    ],
    "modulo2_gestionRiesgos": [
      {
        "id": "ehs_gest_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el primer paso metodológico para elaborar una matriz de riesgos (IPVR o RAM)?",
        "options": [
          "Definir el costo de los equipos de protección.",
          "Identificar los peligros asociados a cada actividad y proceso de la organización.",
          "Hacer una auditoría de incidentes ocurridos el año anterior.",
          "Diseñar un plan de capacitación en primeros auxilios."
        ],
        "answer": 1,
        "feedback": "Correcto. La identificación exhaustiva de peligros (el qué y cómo del peligro latente) es el insumo principal y previo a toda evaluación cualitativa o cuantitativa del riesgo.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "En una Matriz de Riesgos RAM, la variable 'Riesgo' se calcula típicamente como la relación entre:",
        "options": [
          "Costo de equipos × número de trabajadores",
          "Probabilidad de ocurrencia × Severidad del impacto (o consecuencia)",
          "Horas de capacitación × número de auditorías",
          "Fuerza estática × peso del operario"
        ],
        "answer": 1,
        "feedback": "Correcto. El riesgo es la probabilidad de que un peligro se materialice frente a la severidad o nivel de consecuencias asociadas a ese evento.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "Un 'Peligro' se define como:",
        "options": [
          "El resultado final de un accidente con lesiones.",
          "Una fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, daños materiales o ambientales.",
          "La probabilidad matemática de sufrir un tropiezo.",
          "La multa impuesta por la autoridad competente."
        ],
        "answer": 1,
        "feedback": "Correcto. Peligro es la condición intrínseca capaz de generar un daño (ej. energía eléctrica, trabajo en altura). El riesgo es la probabilidad de exposición a ese peligro.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En la jerarquía de controles de riesgos, ¿cuál de las siguientes opciones representa una medida de 'Sustitución'?",
        "options": [
          "Obligar a usar guantes especiales al manipular solventes tóxicos.",
          "Reemplazar una pintura con disolvente orgánico inflamable por una pintura a base de agua no tóxica.",
          "Colocar un letrero de advertencia sobre vapores químicos.",
          "Instalar una campana extractora de gases sobre el área de trabajo."
        ],
        "answer": 1,
        "feedback": "Correcto. La sustitución reemplaza la fuente de peligro por otra que sea inherentemente menos peligrosa o no peligrosa (como pintura base agua vs base solvente).",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué caracteriza a una inspección de seguridad del tipo 'No Planeada' o informal?",
        "options": [
          "Se realiza siguiendo una lista de chequeo estricta acordada a inicio de año.",
          "Es una observación aleatoria y cotidiana realizada durante los recorridos del supervisor de EHS para identificar actos y condiciones inseguras en tiempo real.",
          "Se agenda formalmente con los gerentes de producción.",
          "Solo se hace por exigencia del Ministerio."
        ],
        "answer": 1,
        "feedback": "Correcto. Las inspecciones no planeadas son preventivas cotidianas y permiten captar las condiciones reales y normales de operación sin preparación previa por parte de los trabajadores.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué control se considera 'Control Administrativo' en un trabajo en caliente?",
        "options": [
          "El uso de careta de soldadura y guantes de carnaza.",
          "La rotación del personal expuesto, el procedimiento de trabajo seguro (PTS) y la firma del permiso correspondiente.",
          "La instalación de pantallas o mamparas protectoras de chispas.",
          "Sustituir la soldadura por pernos roscados mecánicos."
        ],
        "answer": 1,
        "feedback": "Correcto. Los controles administrativos actúan sobre los métodos de trabajo, procedimientos, límites de tiempo de exposición y autorizaciones escritas.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "El supervisor EHS realiza una inspección y detecta un piso liso con presencia de derrame de aceite en el taller de mantenimiento. Esto se clasifica como una:",
        "options": [
          "Acción correctiva SMART",
          "Condición Insegura",
          "Acto Inseguro",
          "Falla administrativa de control de acceso"
        ],
        "answer": 1,
        "feedback": "Correcto. Un derrame de aceite es un estado físico peligroso en el entorno del trabajo, constituyendo una Condición Insegura clásica.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Al evaluar la efectividad de una matriz de riesgos, ¿qué representa el concepto de 'Riesgo Residual'?",
        "options": [
          "El riesgo inicial antes de proponer controles.",
          "El nivel de riesgo que permanece una vez que se han implementado y verificado todos los controles de seguridad planeados.",
          "La suma de los costos económicos de los accidentes.",
          "El riesgo asociado a los residuos peligrosos de la planta."
        ],
        "answer": 1,
        "feedback": "Correcto. El riesgo residual es el riesgo real al que está expuesto el trabajador asumiendo que los controles implementados funcionan perfectamente. Debe estar en niveles aceptables.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la principal ventaja de aplicar el Análisis de Modos y Efectos de Fallas (AMEF) en la gestión de seguridad de procesos industriales críticos?",
        "options": [
          "Reducir las primas de la aseguradora del automóvil.",
          "Identificar sistemáticamente los componentes de un proceso que pueden fallar, analizar las causas, evaluar los efectos sobre la seguridad de las personas y priorizar acciones correctivas basadas en el Número de Prioridad de Riesgo (NPR).",
          "Clasificar al personal según su antigüedad laboral.",
          "Establecer la estructura jerárquica del departamento de compras."
        ],
        "answer": 1,
        "feedback": "Correcto. El AMEF es una herramienta metodológica de ingeniería de fiabilidad que predice fallas mecánicas, eléctricas u operativas antes de que resulten en accidentes graves catastróficos.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es el objetivo de las tarjetas de bloqueo y etiquetado (LOTO - Lockout/Tagout) en el control operacional?",
        "options": [
          "Identificar el precio de los equipos de repuesto.",
          "Garantizar el aislamiento absoluto de todas las fuentes de energía peligrosas (eléctrica, neumática, hidráulica, mecánica) de un equipo antes de realizar mantenimientos, impidiendo arranques accidentales.",
          "Organizar la entrega del turno entre operarios.",
          "Rotular los nombres del personal de limpieza."
        ],
        "answer": 1,
        "feedback": "Correcto. LOTO asegura que las energías residuales y activas estén bloqueadas físicamente y etiquetadas con candado individual del mantenedor para proteger su integridad física.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🛠️ CASO DE MANTENIMIENTO: Se debe cambiar un motor eléctrico pesado acoplado a un molino de tolva. Para realizar la labor, el operador apaga el molino desde el botón selector de la cabina y coloca una etiqueta manual de 'NO PRENDER'. El supervisor EHS inspecciona el área antes de que los mecánicos introduzcan las manos al molino.",
        "text": "¿Cuál es la deficiencia crítica en el control de energías y la acción requerida?",
        "options": [
          "La etiqueta debe ser plastificada; no hay más deficiencias.",
          "El apagado por selector de cabina no garantiza el aislamiento físico de la energía eléctrica residual ni de la mecánica del molino. Se requiere aplicar protocolo LOTO completo: Bloqueo del disyuntor principal de potencia (candado físico), purga de energía mecánica y prueba de arranque cero (try-out) antes de tocar el molino.",
          "La única acción es asegurar que los mecánicos usen guantes de cuero grueso.",
          "Se debe agilizar el trabajo sin apagar el motor para no retrasar la producción."
        ],
        "answer": 1,
        "feedback": "Correcto. El selector de mando no es un dispositivo aislador de energía. El protocolo LOTO exige el bloqueo directo en la fuente de alimentación del disyuntor de potencia y verificar la ausencia total de tensión (prueba try-out).",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏗️ CASO MATRIZ DE RIESGOS: Al auditar la matriz de riesgos del taller mecánico, se observa que la actividad de 'afilado de herramientas con esmeril de banco' tiene una calificación de riesgo moderada, asumiendo el control de 'uso de monofocales'. Sin embargo, al auditar el taller, se observa que 3 de las máquinas esmeriladoras no tienen instalada la pantalla de acrílico transparente de protección y tienen las piedras de esmeril agrietadas.",
        "text": "¿Qué desviación metodológica presenta la matriz de riesgos y cuál es la consecuencia práctica?",
        "options": [
          "No hay desviación, los monofocales protegen al trabajador de la rotura del disco.",
          "Falso supuesto de efectividad de los controles: la matriz asume controles que en campo están ausentes o defectuosos (pantalla rota, piedra agrietada). El riesgo residual real es 'crítico/inaceptable' por peligro de proyección de fragmentos a alta velocidad y explosión del disco.",
          "La matriz debe rehacerse únicamente aumentando la frecuencia de inspecciones de monofocales.",
          "El esmeril de banco no es una máquina de alto riesgo."
        ],
        "answer": 1,
        "feedback": "Correcto. Una matriz de riesgos que evalúa el riesgo asumiendo controles ideales que no se cumplen en campo crea una falsa sensación de seguridad. El supervisor debe corregir el estado de la máquina y recalificar el riesgo.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál de los siguientes es un agente físico de riesgo laboral?",
        "options": [
          "Ácido clorhídrico en tuberías.",
          "Ruido industrial continuo generado por compresores sin cabina de insonorización.",
          "Virus de la influenza estacional.",
          "Monóxido de carbono en bodegas."
        ],
        "answer": 1,
        "feedback": "Correcto. El ruido, las vibraciones, la iluminación deficiente, las radiaciones y el estrés térmico son agentes físicos clásicos contemplados en higiene industrial.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En higiene industrial, ¿qué es el Valor Límite Umbral (TLV) para exposición a sustancias químicas?",
        "options": [
          "El precio de mercado de la sustancia.",
          "La concentración promedio de una sustancia química en el aire a la que se cree que casi todos los trabajadores pueden estar expuestos diariamente sin efectos adversos a la salud.",
          "La temperatura máxima a la que se inflama la sustancia.",
          "El peso volumétrico del contaminante."
        ],
        "answer": 1,
        "feedback": "Correcto. Los TLV definidos por la ACGIH (y NOM-010 mexicana) establecen los límites máximos de exposición permisibles por jornada para prevenir enfermedades profesionales.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_15",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Al realizar una inspección de ergonomía en puestos de oficina y líneas de ensamblaje, ¿qué método semicuantitativo es recomendado para evaluar la carga postural del cuerpo entero?",
        "options": [
          "Método LOTO",
          "Método REBA (Rapid Entire Body Assessment) / RULA",
          "Fórmula del factor de caída",
          "Metodología de los 5 Porqués"
        ],
        "answer": 1,
        "feedback": "Correcto. REBA y RULA son metodologías ergonómicas observacionales estandarizadas que evalúan la carga postural y el riesgo de trastornos musculoesqueléticos.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_16",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué representa la clasificación 'Riesgo Crítico' en una matriz RAM de colores?",
        "options": [
          "Área verde: aceptable con monitoreo anual.",
          "Área roja: inaceptable, exige suspensión de actividades o aplicación de controles inmediatos de ingeniería antes de ejecutar la tarea.",
          "Área amarilla: requiere únicamente EPP básico.",
          "Riesgo de pérdidas de papelería administrativa."
        ],
        "answer": 1,
        "feedback": "Correcto. Las zonas rojas en matrices RAM indican riesgos intolerables que prohíben la ejecución operacional hasta que el riesgo sea mitigado a niveles medios o bajos.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_17",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es el propósito del proceso de 'Gestión del Cambio' (Management of Change - MOC) en plantas industriales?",
        "options": [
          "Modificar la estructura de salarios del personal administrativo.",
          "Asegurar que todas las modificaciones temporales o permanentes en equipos, procesos, sustancias o estructura organizacional sean evaluadas respecto a nuevos riesgos de SST antes de su implementación.",
          "Cambiar de proveedor de software de nómina.",
          "Renovar la imagen de la empresa."
        ],
        "answer": 1,
        "feedback": "Correcto. La gestión del cambio previene accidentes catastróficos que se producen al alterar flujos de procesos o tuberías sin un análisis multidisciplinar previo.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_18",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué control se considera de ingeniería para mitigar la inhalación de vapores orgánicos en un laboratorio?",
        "options": [
          "Dotar de mascarillas de doble cartucho de carbón activo.",
          "Instalar una campana extractora de gases de flujo laminar con filtros adecuados.",
          "Prohibir el uso de sustancias químicas por las tardes.",
          "Implementar una charla de 5 minutos sobre sustancias químicas."
        ],
        "answer": 1,
        "feedback": "Correcto. La campana extractora captura el contaminante en la fuente (control de ingeniería), lo cual es metodológicamente superior a depender de la mascarilla (EPP).",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_19",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Al realizar inspecciones planeadas de seguridad, ¿cómo se define el concepto de 'Inspección de Partes Críticas'?",
        "options": [
          "La revisión de la oficina del gerente.",
          "La inspección enfocada de forma específica en aquellos componentes, maquinarias o áreas que tienen alta probabilidad de causar fallas mayores o accidentes graves si fallan (ej. cables de grúas, válvulas de calderas).",
          "La auditoría a los currículums del personal.",
          "Verificar las chapas de las puertas externas."
        ],
        "answer": 1,
        "feedback": "Correcto. Las partes críticas concentran el mayor potencial de pérdidas y fallas sistémicas, requiriendo rutinas de inspección mucho más rigurosas que la inspección general.",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_20",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏗️ CASO DE EXPOSICIÓN A RUIDO: Una nueva compresora instalada en el taller genera un nivel de ruido continuo de 96 dBA en el puesto de trabajo. El supervisor EHS observa que la meta de la NOM-011-STPS exige un límite máximo de 90 dBA para 8 horas de exposición. El contratista propone proveer protectores auditivos de tipo tapón (NRR 22 dBA) para resolver el problema.",
        "text": "Como supervisor EHS, evalúe la propuesta del contratista y determine la acción metodológicamente correcta:",
        "options": [
          "Aprobar la propuesta, los tapones resuelven el problema de forma definitiva.",
          "Rechazar la solución aislada: la jerarquía exige primero evaluar el control en la fuente (insonorización con cabina acústica, barreras de atenuación) para bajar el dBA ambiental. De no ser posible, calcular el NRR real del tapón aplicando la fórmula de reducción real (atenuación corregida) y complementar.",
          "Exigir el despido del operador del compresor.",
          "Apagar el compresor permanentemente y trabajar de forma manual."
        ],
        "answer": 1,
        "feedback": "Correcto. La jerarquía de controles de ruido prioriza el control ingenieril en el medio o la fuente (barreras acústicas o encerramiento) antes de depender del uso de tapones de hule. Además, los NRR de laboratorio deben corregirse en campo (típicamente dividiendo a la mitad la atenuación nominal).",
        "reference": "NOM-030-STPS-2009 / NOM-004-STPS-1999 / NOM-005-STPS-1998",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos (JSA)"
        ]
      },
      {
        "id": "ehs_gest_21",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es la diferencia metodológica principal entre un JSA (Análisis de Seguridad en el Trabajo) y una Matriz de Riesgos IPERC?",
        "options": [
          "El JSA es proactivo y la matriz IPERC es reactiva.",
          "El JSA analiza una tarea específica paso a paso en campo; la matriz IPERC evalúa los riesgos globales de todos los puestos y áreas de la organización de forma matricial.",
          "El JSA solo aplica a trabajos de oficina.",
          "No hay diferencia, son dos nombres para el mismo formato de Word."
        ],
        "answer": 1,
        "feedback": "Correcto. El JSA es operativo y detallado para un trabajo específico diario. La matriz IPERC es un documento estratégico que mapea todos los riesgos de la empresa por procesos y puestos.",
        "reference": "NOM-030-STPS-2009, Guía de Referencia I",
        "competencies": [
          "Identificación de Peligros",
          "Análisis de Riesgos"
        ]
      },
      {
        "id": "ehs_gest_22",
        "difficulty": "medio",
        "type": "caso",
        "scenario": "🔒 CASO LOTO: Se realizará el mantenimiento correctivo de una bomba hidráulica industrial. El Supervisor EHS debe validar el bloqueo de energías.",
        "text": "¿Cuáles son los pasos obligatorios para asegurar un bloqueo LOTO (Lockout/Tagout) completo?",
        "options": [
          "Apagar el switch eléctrico y colocar un candado.",
          "Identificar fuentes ➔ Apagar ➔ Aislar fuentes (eléctrica, hidráulica, neumática, gravedad) ➔ Bloquear con candado y tarjeta ➔ Disipar energía residual ➔ Verificar energía cero.",
          "Colocar una tarjeta de aviso que diga 'Bomba en reparación' en el panel de control.",
          "Bajar la palanca principal de la planta completa sin candados."
        ],
        "answer": 1,
        "feedback": "Correcto. El protocolo LOTO requiere el aislamiento de TODAS las fuentes de energía (primarias y residuales), bloqueo físico individual, liberación de energía remanente y la prueba física de verificación de energía cero.",
        "reference": "NOM-004-STPS-1999 (Sistemas de protección y dispositivos de seguridad en maquinaria), Numeral 5.4",
        "competencies": [
          "Lockout/Tagout (LOTO)",
          "Control de Energías Peligrosas"
        ]
      },
      {
        "id": "ehs_gest_23",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es el rango de porcentaje de concentración de oxígeno aceptable en el aire para autorizar la entrada de un trabajador a un espacio confinado sin equipo de respiración autónoma?",
        "options": [
          "Entre 15% y 18%",
          "Entre 19.5% y 23.5%",
          "Exactamente 21.0% sin variaciones",
          "Cualquier nivel superior al 10%"
        ],
        "answer": 1,
        "feedback": "Correcto. Por debajo de 19.5% se considera atmósfera deficiente de oxígeno (riesgo de asfixia y desmayo). Por encima de 23.5% es atmósfera enriquecida (alto riesgo de combustión espontánea).",
        "reference": "NOM-033-STPS-2015 (Trabajos en espacios confinados), Numeral 9.1",
        "competencies": [
          "Atmósferas Peligrosas",
          "Espacios Confinados"
        ]
      },
      {
        "id": "ehs_gest_24",
        "difficulty": "dificil",
        "type": "caso",
        "scenario": "🧪 CASO DE ALMACENAMIENTO QUÍMICO: En el almacén se reciben tambos de Ácido Nítrico concentrado y tambos de Alcohol Isopropílico. El almacenista propone colocarlos juntos porque son líquidos embotellados en tambores sellados de plástico grueso.",
        "text": "Como Supervisor EHS, ¿cuál es tu dictamen?",
        "options": [
          "Aprobarlo ya que al estar sellados no hay posibilidad de contacto físico.",
          "Rechazar el almacenamiento conjunto: el ácido nítrico es un fuerte oxidante y el alcohol isopropílico es un líquido inflamable; su almacenamiento cercano está estrictamente prohibido por riesgo de reacción exotérmica violenta o incendio.",
          "Permitir la colocación si se pone una lona plástica divisoria en medio.",
          "Autorizarlo únicamente si el almacén cuenta con extractor de aire convencional."
        ],
        "answer": 1,
        "feedback": "Correcto. La incompatibilidad química es un riesgo crítico. Sustancias oxidantes e inflamables deben estar físicamente separadas (mínimo 6 metros o mediante muro cortafuegos) para evitar catástrofes.",
        "reference": "NOM-005-STPS-1998 (Manejo, transporte y almacenamiento de sustancias químicas peligrosas), Numeral 7.2 / GHS",
        "competencies": [
          "Seguridad Química",
          "Incompatibilidad de Sustancias"
        ]
      },
      {
        "id": "ehs_gest_25",
        "difficulty": "experto",
        "type": "teorica",
        "text": "Al realizar una evaluación de higiene industrial por ruido en un área productiva, el sonómetro registra un Nivel Sonoro Continuo Equivalente (NSCE) de 93 dB(A) para una jornada de 8 horas. ¿Qué medida legal y técnica inmediata debe aplicar el Supervisor EHS?",
        "options": [
          "Suministrar tapones auditivos de baja atenuación (NRR 15 dB) y permitir que continúe la jornada normal.",
          "Implementar un Programa de Conservación de la Audición, reducir el tiempo de exposición del personal (límite legal para 93 dB es 4 horas) o aislar acústicamente la fuente, y dotar de protectores auditivos de alta atenuación (NRR >20 dB).",
          "Ninguna, el límite de exposición permisible es de 105 dB para 8 horas.",
          "Programar exámenes médicos audiómetricos únicamente cada 5 años."
        ],
        "answer": 1,
        "feedback": "Correcto. El límite máximo de exposición para una jornada de 8 horas en México es de 90 dB(A). A 93 dB(A), el tiempo de exposición permitido se reduce a la mitad (4 horas) conforme a la tasa de intercambio de 3 dB. Se requiere control de ingeniería y equipo atenuador adecuado.",
        "reference": "NOM-011-STPS-2001 (Condiciones de seguridad e higiene en los centros de trabajo donde se genere ruido), Numeral 5.4 y Tabla A.1",
        "competencies": [
          "Higiene Industrial",
          "Control de Ruido Ocupacional"
        ]
      }
    ],
    "modulo3_investigacion": [
      {
        "id": "ehs_inve_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el propósito principal de investigar un accidente o incidente de trabajo?",
        "options": [
          "Identificar al trabajador culpable para despedirlo o sancionarlo.",
          "Determinar las causas raíz del evento para implementar acciones correctivas que eviten su recurrencia en el futuro.",
          "Recopilar información para justificar el no pago de indemnizaciones.",
          "Completar el papeleo exigido únicamente para archivar."
        ],
        "answer": 1,
        "feedback": "Correcto. La investigación preventiva busca fallas en el sistema de gestión y procesos (causas raíz) para mejorarlos, no para buscar chivos expiatorios.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué diferencia fundamental hay entre un 'Accidente de Trabajo' y un 'Incidente de Trabajo' (Near Miss)?",
        "options": [
          "El accidente siempre es intencional y el incidente es un error del azar.",
          "El accidente resulta en lesiones físicas al trabajador o daños materiales; el incidente es un suceso que tuvo el potencial de causar daño pero no generó consecuencias.",
          "Los incidentes no se registran por ley.",
          "No hay diferencias."
        ],
        "answer": 1,
        "feedback": "Correcto. El incidente o near miss (casi-accidente) es una alarma preventiva valiosísima debido a que revela el peligro sin haber causado pérdidas humanas ni materiales.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál de las siguientes metodologías se utiliza comúnmente para el análisis de causa raíz basándose en preguntas sucesivas de causa-efecto?",
        "options": [
          "La regla de 3 simple",
          "Los 5 Porqués",
          "La matriz RAM",
          "El ciclo PHVA"
        ],
        "answer": 1,
        "feedback": "Correcto. La técnica de los 5 Porqués indaga de forma secuencial en las causas inmediatas, intermedias y sistémicas, ayudando a ir más allá del error humano obvio.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al iniciar la investigación de un accidente grave en campo, la primera acción prioritaria es:",
        "options": [
          "Llamar a declarar al testigo principal.",
          "Asegurar y acordonar el área del accidente para preservar la escena física y recolectar evidencias fotográficas inmediatas sin alteraciones.",
          "Redactar el plan de acción SMART.",
          "Limpiar el área rápidamente para no afectar la producción."
        ],
        "answer": 1,
        "feedback": "Correcto. Asegurar la escena previene la alteración involuntaria de evidencias físicas clave (máquinas defectuosas, cables rotos, charcos de aceite).",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué representa el 'Diagrama de Ishikawa' o de espina de pescado en la investigación de accidentes?",
        "options": [
          "Una lista de los costos médicos asociados a la incapacidad.",
          "Una herramienta visual que ayuda a categorizar las causas potenciales de un problema en diferentes ramas: Mano de Obra, Maquinaria, Métodos, Materiales, Medio Ambiente e Infraestructura.",
          "El organigrama del equipo investigador de EHS.",
          "El flujo del plan de emergencia."
        ],
        "answer": 1,
        "feedback": "Correcto. El diagrama de Ishikawa estructura la lluvia de ideas investigativa, obligando al equipo a analizar múltiples dimensiones operativas y técnicas.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es la función de los 'Factores Personales' en las causas de un accidente laboral?",
        "options": [
          "Las relaciones familiares del operario.",
          "Aquellas características personales (falta de conocimiento, fatiga, limitaciones físicas, motivación inadecuada) que influyen en la comisión de actos inseguros.",
          "El salario mensual percibido por el trabajador.",
          "La marca del vehículo del operario."
        ],
        "answer": 1,
        "feedback": "Correcto. Los factores personales explican el *porqué* del comportamiento humano, y su análisis ayuda a proponer capacitaciones, rediseño de puestos o rotación de personal.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En un reporte de accidente, el término 'Fallas en el Sistema de Control' (causas básicas de gestión) se refiere a:",
        "options": [
          "Fallas en el software de nómina.",
          "Deficiencias en programas de mantenimiento preventivo, falta de estándares escritos claros, capacitación deficiente o compras de equipos no certificados.",
          "Ruptura de vidrios en la oficina.",
          "Apagón de luz general de la planta."
        ],
        "answer": 1,
        "feedback": "Correcto. Las fallas de control organizacional son las verdaderas causas raíz latentes que permiten que existan condiciones y actos inseguros en campo.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué característica define a una acción correctiva que cumple con los criterios 'SMART'?",
        "options": [
          "Que sea aprobada verbalmente por el gerente de compras.",
          "Que sea Específica, Medible, Alcanzable, Relevante y con un Tiempo límite definido para su cumplimiento.",
          "Que tenga un bajo costo financiero.",
          "Que sea redactada por la aseguradora del IMSS."
        ],
        "answer": 1,
        "feedback": "Correcto. El estándar SMART garantiza que la acción no sea vaga (ej. 'concientizar al personal'), sino concreta, con responsable y fecha verificable de implementación.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Al investigar un accidente laboral utilizando el Modelo de Causalidad SCAT (Systematic Cause Analysis Technique), ¿cómo se vinculan los eventos?",
        "options": [
          "De forma lineal aleatoria por azar.",
          "Pérdida ➔ Incidente ➔ Causas Inmediatas (actos/condiciones) ➔ Causas Básicas (factores personales/trabajo) ➔ Falla de Control (falta de sistema/estándar/cumplimiento).",
          "Costo médico ➔ tiempo perdido ➔ amonestación escrita.",
          "Investigación penal ➔ multa de STPS ➔ cierre de planta."
        ],
        "answer": 1,
        "feedback": "Correcto. SCAT es un modelo sistémico riguroso que traza la secuencia de pérdidas desde la consecuencia visible hasta las fallas de liderazgo y control organizacional.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué es el 'subregistro de incidentes' en una planta y cómo afecta la gestión de seguridad del supervisor?",
        "options": [
          "La falta de hojas de registro en papelería.",
          "La omisión deliberada o involuntaria de reportar los near misses y accidentes leves, lo cual oculta peligros críticos latentes y favorece la ocurrencia de accidentes graves futuros.",
          "Un error en el sistema de cómputo del IMSS.",
          "La no entrega de certificados DC-3."
        ],
        "answer": 1,
        "feedback": "Correcto. El subregistro enmascara el riesgo real de la planta. Si no se reportan incidentes leves, el sistema no aprende y los peligros escalan hasta provocar fatalidades.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🚨 CASO DE INVESTIGACIÓN: Un operario de planta pierde dos dedos en una prensa hidráulica al intentar retirar una pieza atorada. Al investigar, el supervisor encuentra que la guarda de seguridad interbloqueada de la prensa había sido puenteada (bypass) con cinta aislante por el operador del turno anterior para agilizar el trabajo. El supervisor EHS interroga al operador del accidente, quien afirma que 'todos lo hacen para llegar a la cuota diaria' y que sus jefes directos sabían de esto.",
        "text": "¿Cuál es la causa raíz real y la acción sistémica correcta?",
        "options": [
          "El uso de cinta aislante es la causa raíz; se debe amonestar al operador del accidente y prohibir la cinta.",
          "Falla de control en el sistema de supervisión y cultura organizativa que tolera el desvío de seguridad por producción. La acción es instalar guardas fijas de difícil manipulación, capacitar en LOTO, sancionar a los supervisores de producción que toleraban el desvío y revisar las cuotas operativas.",
          "El operario es torpe; se debe reubicar al trabajador en la oficina.",
          "Comprar prensas automáticas chinas de última generación."
        ],
        "answer": 1,
        "feedback": "Correcto. Puenteae de guardas por presión productiva tolerada por los jefes revela una causa raíz cultural y sistémica profunda de liderazgo. Culpar al operador no soluciona el problema de fondo.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📋 CASO DE RECOLECCIÓN DE EVIDENCIA: Un soldador cae desde 6 metros al ceder una baranda soldada de una plataforma de mantenimiento. El soldador resulta con politraumatismo severo. Al llegar a la escena, el supervisor EHS observa que el jefe de mantenimiento ya ordenó al soldador de planta soldar una nueva placa de refuerzo en la baranda caída para 'limpiar el desastre' antes de que llegue la inspección estatal.",
        "text": "¿Qué acción legal y técnica inmediata debe tomar el supervisor EHS?",
        "options": [
          "Agradecer al jefe de mantenimiento por limpiar rápido el área.",
          "Detener inmediatamente el trabajo de reparación, acordonar el área, reportar la obstrucción de la escena como violación interna de seguridad y presunto delito, documentar fotográficamente la soldadura rota original y decomisar la baranda dañada para análisis de falla metalúrgica.",
          "Ayudar a soldar para terminar antes del arribo del inspector.",
          "Redactar un correo electrónico felicitando al soldador por su rapidez."
        ],
        "answer": 1,
        "feedback": "Correcto. Alterar deliberadamente la escena de un accidente grave obstruye la investigación de causas raíz e incurre en responsabilidades penales graves por ocultamiento de pruebas.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué información básica obligatoria debe registrarse en las primeras 24 horas posteriores a un accidente de trabajo?",
        "options": [
          "Datos personales del lesionado, descripción sucinta de los hechos, lugar exacto, hora y firmas de testigos presenciales.",
          "El cálculo del valor de la indemnización IMSS.",
          "El listado de insumos médicos de la enfermería.",
          "La biografía laboral completa del accidentado."
        ],
        "answer": 0,
        "feedback": "Correcto. El reporte preliminar recopila los datos clave in situ cuando los hechos y testimonios están frescos en la memoria de los testigos.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al entrevistar a un testigo de un accidente de trabajo, el supervisor EHS debe:",
        "options": [
          "Hacer preguntas capciosas y presionar al testigo para que acepte la culpa del operario.",
          "Realizar preguntas abiertas, escuchar sin emitir juicios ni culpas, y entrevistar a cada testigo de forma individual y privada.",
          "Grabar un video y publicarlo en las redes de la empresa.",
          "Hacer la entrevista en presencia del gerente general para presionar."
        ],
        "answer": 1,
        "feedback": "Correcto. Las entrevistas efectivas buscan hechos objetivos mediante un ambiente de confianza no punitivo, permitiendo al testigo reconstruir el evento con libertad.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_15",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué significa el concepto de 'Causas Inmediatas' en la causalidad de incidentes?",
        "options": [
          "La falta de un presupuesto anual de seguridad.",
          "Los actos inseguros (comportamientos) y condiciones inseguras (entorno físico) que se presentaron justo antes de ocurrir el accidente.",
          "La demora en la llegada de la ambulancia.",
          "Las secuelas médicas a largo plazo."
        ],
        "answer": 1,
        "feedback": "Correcto. Las causas inmediatas son las circunstancias visibles superficiales que desencadenaron directamente el contacto con la energía peligrosa.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_16",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Al redactar un plan de acción derivado de una investigación, se propone la acción: 'Pedir a los operarios que tengan más cuidado al manejar el montacargas'. ¿Qué evaluación técnica merece esta acción?",
        "options": [
          "Es una acción SMART excelente.",
          "Es una acción ineficaz y no SMART: no es específica, no es medible, no tiene fecha límite, no tiene responsable y recae en el comportamiento subjetivo. Debe reestructurarse (ej. instalar limitador de velocidad a 10km/h por técnico de mantenimiento en Q3).",
          "Es adecuada si se firma en la cartelera general.",
          "Es de bajo costo, por lo que es la prioritaria."
        ],
        "answer": 1,
        "feedback": "Correcto. Vagas intenciones de 'cuidado' no resuelven la causa raíz del exceso de velocidad. Las acciones correctivas reales modifican la ingeniería del equipo o estandarizan el control operativo de forma verificable.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_17",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cuál es la función de los 'Factores del Trabajo' en el análisis de causas básicas de incidentes?",
        "options": [
          "El estado civil de los operarios.",
          "Las deficiencias en el diseño de equipos, falta de mantenimiento preventivo, herramientas inapropiadas o estándares de compras deficientes.",
          "El número de horas extra trabajadas en la administración.",
          "La distancia del centro de trabajo a la ciudad."
        ],
        "answer": 1,
        "feedback": "Correcto. Los factores del trabajo analizan las condiciones del entorno físico y operativo que fomentan los actos inseguros o fallas de máquinas.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_18",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué es un 'Near Miss' o cuasi-accidente?",
        "options": [
          "Un accidente que ocurrió en la empresa vecina.",
          "Un suceso imprevisto que, bajo circunstancias ligeramente diferentes, pudo haber resultado en lesiones o daños a la propiedad.",
          "Una multa fallida de la autoridad.",
          "La entrega tardía del EPP."
        ],
        "answer": 1,
        "feedback": "Correcto. Estudiar y eliminar las causas de los near misses evita que la pirámide de Bird escale a accidentes mayores.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_19",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene el procedimiento cronológico obligatorio ante la ocurrencia de un accidente con lesión grave en la planta:",
        "items": [
          "Prestar primeros auxilios in situ y coordinar el traslado médico inmediato del lesionado.",
          "Asegurar, delimitar y acordonar el área del accidente para preservar la escena intacta.",
          "Notificar preliminarmente el evento a la gerencia de planta y al área de EHS.",
          "Conformar el equipo investigador (EHS, líder de área, miembro de la comisión) y recabar testimonios y fotos.",
          "Realizar el análisis de causas raíz (Ishikawa/5 Porqués) y definir el plan de acción SMART."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. Atención al herido ➔ Preservar escena ➔ Notificación ➔ Equipo y pruebas ➔ Causa raíz y plan SMART. La vida y salud del trabajador lesionado SIEMPRE es la prioridad número uno.",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_20",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene las etapas de la técnica de los '5 Porqués' para resolver la falla de una bomba de proceso que causó un derrame químico:",
        "items": [
          "La junta de la bomba falló liberando el químico (¿Por qué? - Desgaste del sello).",
          "El sello elastómero estaba desgastado (¿Por qué? - No se cambió en el periodo recomendado).",
          "El mantenimiento del sello no se realizó a tiempo (¿Por qué? - No existía en el plan de mantenimiento preventivo).",
          "La bomba de proceso no estaba en el plan de mantenimiento preventivo (¿Por qué? - Se omitió su registro en la entrega del proyecto de instalación).",
          "La bomba fue omitida en el sistema de gestión por falta de auditoría de entrega de proyectos (Causa Raíz Sistémica)."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. El flujo avanza deductivamente desde la falla física mecánica superficial (el sello roto) hasta la falla de gestión organizativa (ausencia de control en la entrega de proyectos).",
        "reference": "Ley Federal del Trabajo, Artículo 504 / NOM-019-STPS / Metodología SMCV",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_21",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es la limitación metodológica principal de aplicar únicamente los '5 Porqués' en la investigación de un accidente grave o fatal?",
        "options": [
          "Que requiere mucho tiempo administrativo para completarse.",
          "Que es una metodología lineal que tiende a encontrar una sola causa raíz o culpar al error humano, ignorando la multicausalidad sistémica y factores organizacionales complejos.",
          "Que no es aprobada por el IMSS.",
          "Que solo sirve para incidentes menores de oficina."
        ],
        "answer": 1,
        "feedback": "Correcto. Los 5 Porqués es útil por su simplicidad, pero para fallas graves se queda corta. Debe combinarse con Diagramas de Causa-Efecto (Ishikawa) o Árbol de Fallas para mapear la multicausalidad del sistema.",
        "reference": "Metodologías de Investigación de Incidentes (OSHA/EPA Guidelines)",
        "competencies": [
          "Investigación de Incidentes",
          "Análisis de Causa Raíz"
        ]
      },
      {
        "id": "ehs_inve_22",
        "difficulty": "medio",
        "type": "caso",
        "scenario": "📋 CASO REPORTES: La gerencia de la planta nota que el indicador reactivo de accidentes graves es alto (5 al año), pero el registro de Near Misses (casi-accidentes) está en cero. El Supervisor EHS investiga y los operarios comentan: 'Si reportamos que casi nos accidentamos, el supervisor nos regaña o nos reporta por cometer un acto inseguro'.",
        "text": "¿Qué acción estratégica debe proponer el Supervisor EHS para solucionar este problema?",
        "options": [
          "Poner un buzón físico cerrado para que los reportes sean 100% anónimos y obligatorios bajo amenaza de multa.",
          "Implementar una política de 'Cultura Justa' no punitiva, capacitar al personal en la importancia preventiva del reporte, crear un canal digital sencillo y recompensar públicamente el reporte de near misses solucionados.",
          "Contratar un consultor externo para que investigue en secreto quién no reporta.",
          "Ignorar el indicador de near misses y enfocarse únicamente en los accidentes reales."
        ],
        "answer": 1,
        "feedback": "Correcto. El subregistro de near misses ocurre por miedo a represalias. Una cultura no punitiva (Cultura Justa) fomenta el reporte de incidentes menores, permitiendo corregir peligros antes de que escalen en la pirámide de Bird.",
        "reference": "Cultura de Seguridad Organizacional (Reason's Safe Culture Model)",
        "competencies": [
          "Near-Miss Reporting",
          "Cultura Preventiva"
        ]
      },
      {
        "id": "ehs_inve_23",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En la economía de la seguridad, ¿qué representa el concepto de 'Costos Indirectos' de un accidente de trabajo y cuál es su relación típica con los Costos Directos (médicos/aseguradora)?",
        "options": [
          "Son los gastos de viáticos del personal de recursos humanos.",
          "Representan costos no asegurados (pérdida de productividad, daño a maquinaria, tiempo de investigación, multas, clima laboral afectado); típicamente son de 4 a 10 veces mayores que los costos directos.",
          "Son exactamente iguales en valor monetario a los costos directos.",
          "Son costos ficticios que no impactan las finanzas reales de la empresa."
        ],
        "answer": 1,
        "feedback": "Correcto. El iceberg de los costos de accidentes demuestra que los gastos médicos y de seguro son solo la punta. Los costos indirectos (paros de línea, mala reputación, reentrenamiento) devoran los márgenes operativos de la empresa.",
        "reference": "Teoría de los Costos de Accidentes de Heinrich / OIT",
        "competencies": [
          "Finanzas de la Seguridad",
          "Análisis de Impacto"
        ]
      },
      {
        "id": "ehs_inve_24",
        "difficulty": "dificil",
        "type": "caso",
        "scenario": "⚖️ CASO ACCIDENTE REGULATORIO: Un operador sufre la amputación de un dedo índice en una troqueladora a las 10:00 AM del lunes. Es trasladado de inmediato al IMSS por la ambulancia de la planta.",
        "text": "¿Cuál es el plazo legal que tiene el patrón para dar aviso oficial del accidente a la Secretaría del Trabajo y Previsión Social (STPS)?",
        "options": [
          "Inmediatamente en la primera hora posterior.",
          "Dentro de las 72 horas siguientes a que ocurra el accidente.",
          "Dentro de las 24 horas siguientes a que ocurra el accidente o a que se tenga conocimiento del mismo.",
          "No hay plazo, se puede reportar en el informe mensual ordinario."
        ],
        "answer": 2,
        "feedback": "Correcto. La Ley Federal del Trabajo y el Reglamento Federal de Seguridad y Salud en el Trabajo establecen que todo accidente de trabajo grave o fatal debe reportarse a la STPS dentro de las 24 horas hábiles a través del sistema SIAST.",
        "reference": "Reglamento Federal de Seguridad y Salud en el Trabajo (México), Artículo 76",
        "competencies": [
          "Cumplimiento Legal",
          "Reporte de Accidentes"
        ]
      },
      {
        "id": "ehs_inve_25",
        "difficulty": "experto",
        "type": "teorica",
        "text": "¿Cuál es la principal característica distintiva de la metodología SCAT (Systematic Cause Analysis Technique) en comparación con un Ishikawa simple?",
        "options": [
          "Se basa en una plantilla con formato predefinido de colores.",
          "Utiliza una estructura de tarjeta de control de pérdidas vinculada directamente a los estándares de control administrativo fallidos de la organización (focalizándose en las causas básicas y fallas en el sistema de gestión).",
          "Es un software en la nube de uso exclusivo gubernamental.",
          "No requiere entrevistar a los testigos del accidente."
        ],
        "answer": 1,
        "feedback": "Correcto. El SCAT es una herramienta avanzada basada en el modelo de causalidad de pérdidas de DNV. Vincula de forma sistemática los síntomas (el accidente) con los actos/condiciones, las causas básicas (factores personales/de trabajo) y la falla de control administrativo original de la empresa.",
        "reference": "DNV Systematic Cause Analysis Technique (SCAT) Manual",
        "competencies": [
          "Metodologías de Investigación",
          "Análisis Sistémico"
        ]
      }
    ],
    "modulo4_auditorias": [
      {
        "id": "ehs_audi_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué es una auditoría interna de seguridad y salud en el trabajo?",
        "options": [
          "Una inspección sorpresa para sancionar a los prevencionistas.",
          "Un proceso sistemático, independiente y documentado para evaluar la eficacia y el cumplimiento del Sistema de Gestión de SST frente a criterios establecidos.",
          "Una revisión de los estados financieros de la planta.",
          "Un curso teórico de actualización de normativas."
        ],
        "answer": 1,
        "feedback": "Correcto. La auditoría evalúa el sistema en su conjunto (políticas, procedimientos, registros) para verificar si cumple las metas organizacionales y regulatorias.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál de los siguientes se considera un indicador 'Lagging' o reactivo en EHS?",
        "options": [
          "El porcentaje de inspecciones completadas a tiempo.",
          "La Tasa de Incidencia de Frecuencia de Accidentes (TIFR).",
          "El número de observaciones de seguridad realizadas.",
          "Las horas totales de capacitación impartidas."
        ],
        "answer": 1,
        "feedback": "Correcto. Los indicadores lagging miden sucesos del pasado (siniestralidad, accidentes, días perdidos), reportando resultados ya ocurridos.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "Al redactar un reporte de auditoría, una 'No Conformidad' se define como:",
        "options": [
          "Una opinión negativa de un operario sobre el comedor.",
          "El incumplimiento documentado y con evidencia de un requisito normativo o estándar del sistema de gestión de SST.",
          "La falta de pintura en la fachada exterior.",
          "La demora en la entrega de la nómina."
        ],
        "answer": 1,
        "feedback": "Correcto. Toda no conformidad debe estar fundamentada en evidencias de auditoría objetivas frente a un criterio o norma aplicable.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es la diferencia conceptual entre un indicador 'Leading' (proactivo) y uno 'Lagging' (reactivo)?",
        "options": [
          "Los lagging son cualitativos y los leading cuantitativos.",
          "Los leading miden actividades preventivas orientadas a evitar el accidente; los lagging miden las consecuencias de eventos ya ocurridos.",
          "Los leading solo se usan en empresas internacionales.",
          "No hay diferencias."
        ],
        "answer": 1,
        "feedback": "Correcto. Leading = proactivo (ej. % de extintores inspeccionados). Mide el esfuerzo preventivo antes de que ocurra el fallo. Lagging = reactivo (ej. número de quemaduras).",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "En el ciclo PHVA de mejora continua, la etapa de 'Verificar' incluye:",
        "options": [
          "Comprar nuevos equipos de seguridad.",
          "Realizar auditorías internas, revisar indicadores de desempeño y evaluar el cumplimiento legal de SST.",
          "Impartir charlas sobre la política de la empresa.",
          "Sancionar las desviaciones operativas."
        ],
        "answer": 1,
        "feedback": "Correcto. 'Verificar' consiste en medir la efectividad de las acciones implementadas frente a los objetivos y requisitos originales del plan.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Durante una auditoría de SST, el auditor solicita los registros de calibración de los detectores de gas multigas. Si la empresa no los tiene, se reporta:",
        "options": [
          "Un comentario de mejora informal.",
          "Una No Conformidad Mayor, debido a que operar detectores sin certificar su calibración anula el control de atmósfera explosiva/tóxica, violando normativas obligatorias.",
          "Una observación menor que se puede subsanar en un año.",
          "El cierre definitivo de la planta."
        ],
        "answer": 1,
        "feedback": "Correcto. La ausencia de calibración de un equipo de seguridad crítico anula su confiabilidad operativa, poniendo en peligro inminente la vida de los trabajadores en espacios confinados.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué indicador mide el total de días no laborados por los trabajadores debido a incapacidades médicas por accidentes laborales?",
        "options": [
          "Tasa de Siniestralidad o Tasa de Gravedad (Severity Rate)",
          "Tasa de Incidencia General",
          "Porcentaje de ausentismo general",
          "Índice de rotación de personal"
        ],
        "answer": 0,
        "feedback": "Correcto. El índice de gravedad o siniestralidad evalúa el impacto en tiempo perdido derivado de las lesiones laborales, reflejando la severidad media de los incidentes.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Para calcular el Índice de Gravedad de Accidentes de Trabajo (IG) conforme a estándares internacionales (OSHA/ANSI), ¿qué factor multiplicador de horas-hombre de exposición se utiliza de base estándar anual?",
        "options": [
          "10,000 horas-hombre",
          "200,000 horas-hombre (equivalente al trabajo de 100 operarios a tiempo completo al año)",
          "1,000,000 horas-hombre",
          "50,000 horas-hombre"
        ],
        "answer": 1,
        "feedback": "Correcto. El estándar de 200,000 horas (o 1,000,000 en algunos países) permite normalizar las tasas para realizar comparaciones válidas entre empresas de diferentes tamaños de plantilla.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Un auditor externo de la norma ISO 45001 detecta que las acciones correctivas del accidente ocurrido hace 6 meses no han sido cerradas y los plazos SMART expiraron. ¿Qué tipo de hallazgo representa?",
        "options": [
          "Una oportunidad de mejora.",
          "Una No Conformidad Mayor en el requisito de Acción Correctiva y Mejora Continua, evidenciando una falla sistémica en el seguimiento de compromisos de seguridad por el liderazgo.",
          "Una no conformidad menor únicamente.",
          "Exoneración total de la norma."
        ],
        "answer": 1,
        "feedback": "Correcto. No cerrar acciones correctivas de accidentes demuestra que el sistema de gestión carece de capacidad de auto-corrección, lo cual es una falla grave en ISO 45001.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué evalúa una auditoría del tipo 'Cumplimiento Legal' en una planta industrial de manufactura?",
        "options": [
          "El cumplimiento de las cuotas de ventas mercantiles.",
          "La conformidad total de la planta con el 100% de las leyes y normas oficiales de SST aplicables (ej. NOMs de la STPS, regulaciones de protección civil, medio ambiente).",
          "Los contratos individuales de trabajo de los operarios.",
          "El historial crediticio de la empresa."
        ],
        "answer": 1,
        "feedback": "Correcto. La auditoría de cumplimiento legal detecta pasivos normativos y evita multas administrativas severas o clausuras por parte de inspectores federales.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📊 CASO DE AUDITORÍA: El auditor interno revisa las estadísticas de accidentabilidad y observa una Tasa de Frecuencia (TIFR) de 0.2 (muy baja, clase mundial) en una planta metalmecánica de 800 empleados. Sin embargo, al revisar la bitácora de la enfermería médica, encuentra 120 atenciones por heridas cortantes que requirieron sutura o vendaje especial de soporte, de las cuales ninguna fue reportada como accidente de trabajo con incapacidad.",
        "text": "¿Qué diagnóstico de gestión de SST debe emitir el auditor?",
        "options": [
          "Felicitación a la planta por su excelente índice TIFR.",
          "No conformidad por ocultamiento deliberado de información (subregistro crítico de accidentes). TIFR artificialmente bajo mediante la práctica de no reportar lesiones que requirieron tratamiento médico especializado más allá de primeros auxilios básicos.",
          "Sugerir que se use más desinfectante en la enfermería.",
          "Cambiar al médico de planta por no guardar confidencialidad."
        ],
        "answer": 1,
        "feedback": "Correcto. Las curaciones médicas especializadas (como suturas) superan el umbral de primeros auxilios sencillos y deben reportarse legalmente. Un indicador artificialmente bajo por subregistro oculta el riesgo real.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📋 CASO DE INDICADORES: El supervisor EHS presenta a la junta mensual el indicador Leading de '% de auditorías de LOTO completadas'. El reporte muestra 100% de cumplimiento. No obstante, en la misma junta, el gerente de mantenimiento reporta que la caldera estuvo fuera de servicio por un cortocircuito provocado porque un mecánico intervino los cables sin apagar el interruptor de potencia.",
        "text": "¿Qué falla técnica de indicadores se está evidenciando?",
        "options": [
          "La caldera tiene cables defectuosos por diseño.",
          "Falta de validez y veracidad del indicador leading (indicador de papel/cumplimiento ficticio). Las auditorías se registran como completadas en papel pero carecen de verificación de calidad en campo (el operario no bloqueó el disyuntor real).",
          "El gerente de mantenimiento no apoya la seguridad.",
          "Se debe duplicar el presupuesto de auditorías de LOTO."
        ],
        "answer": 1,
        "feedback": "Correcto. Un indicador leading que reporta 100% de éxito pero coexiste con incidentes críticos del mismo tema revela que las inspecciones son de baja calidad (firmas automáticas en oficina sin ir a campo).",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué significa la sigla 'SST'?",
        "options": [
          "Sistemas de Software de Trabajo.",
          "Seguridad y Salud en el Trabajo.",
          "Sistemas de Saneamiento y Tuberías.",
          "Servicios de Supervisión Técnica."
        ],
        "answer": 1,
        "feedback": "Correcto. SST es la denominación internacional estandarizada para la disciplina preventiva de riesgos laborales.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es la diferencia entre una 'auditoría' y una 'inspección' de seguridad?",
        "options": [
          "La auditoría es de carácter administrativo y evalúa el sistema de gestión; la inspección es de carácter operativo y verifica condiciones físicas de campo.",
          "La inspección la hace el Ministerio y la auditoría el prevencionista.",
          "La auditoría es voluntaria y la inspección es obligatoria.",
          "Son sinónimos absolutos."
        ],
        "answer": 0,
        "feedback": "Correcto. La inspección va al detalle de la máquina rota; la auditoría va al proceso administrativo para ver por qué no funcionó el reporte de esa máquina.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_15",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene cronológicamente las fases de un proceso formal de auditoría de seguridad del SG-SST:",
        "items": [
          "Elaborar y concertar el Plan de Auditoría (fechas, alcance, criterios, auditores).",
          "Reunión de apertura con la alta dirección y líderes de área para explicar los objetivos.",
          "Ejecutar auditoría in situ (revisar evidencias, bitácoras, entrevistas y visitas de campo).",
          "Reunión de cierre presentando las no conformidades y oportunidades de mejora detectadas.",
          "Entregar el Informe de Auditoría formal y dar seguimiento a los planes de acción propuestos."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. Planificación ➔ Apertura ➔ Ejecución y recolección ➔ Cierre y feedback ➔ Informe final y seguimiento. Cumplir este orden garantiza un proceso metodológico transparente.",
        "reference": "NOM-030-STPS-2009 / ISO 45001:2018 Cláusula 9.2",
        "competencies": [
          "Auditoría de Cumplimiento",
          "Acciones Correctivas (CAPA)"
        ]
      },
      {
        "id": "ehs_audi_16",
        "difficulty": "facil",
        "type": "teorica",
        "text": "Bajo la norma ISO 45001:2018, ¿cuál es el propósito principal de realizar auditorías internas periódicas del sistema de gestión de SST?",
        "options": [
          "Prepararse para una auditoría de certificación internacional cobrando multas a los departamentos reprobados.",
          "Determinar si el sistema de gestión es conforme con los requisitos de la norma y las políticas de la propia organización, y si se implementa y mantiene eficazmente.",
          "Encontrar a los culpables de los accidentes del año para reportarlos a recursos humanos.",
          "Hacer una lista de compras de refacciones de maquinaria."
        ],
        "answer": 1,
        "feedback": "Correcto. La auditoría interna evalúa de forma objetiva e independiente el cumplimiento y efectividad del sistema de gestión para asegurar la mejora continua y conformidad normativa.",
        "reference": "ISO 45001:2018, Cláusula 9.2 (Auditoría Interna)",
        "competencies": [
          "Sistemas de Gestión",
          "Auditoría Interna"
        ]
      },
      {
        "id": "ehs_audi_17",
        "difficulty": "medio",
        "type": "caso",
        "scenario": "📋 CASO INTEGRIDAD: Durante la auditoría interna del sistema EHS de la planta, el auditor detecta que el registro de pruebas de tracción de anclajes de alturas no tiene firmas físicas, pero el Supervisor EHS le dice: 'No te preocupes, yo los probé ayer personalmente y están al 100%, fírmame la conformidad y te invito a comer'.",
        "text": "¿Cuál debe ser la postura del auditor interno?",
        "options": [
          "Aceptar la palabra del Supervisor EHS para mantener una buena relación laboral interna.",
          "Registrar un hallazgo de No Conformidad Mayor por falta de evidencia documental objetiva e intento de influencia en el proceso de auditoría.",
          "Firmar el reporte pero escribir una nota aclaratoria privada para el gerente.",
          "Ignorar el punto y continuar con el siguiente tema de la lista de verificación."
        ],
        "answer": 1,
        "feedback": "Correcto. La auditoría se basa en evidencia documental e inspección física objetiva. Los compromisos verbales o favores no constituyen prueba de cumplimiento. La integridad del auditor es inquebrantable.",
        "reference": "ISO 19011:2018 (Directrices para la auditoría de sistemas de gestión), Principios de Auditoría (Integridad, Presentación Imparcial)",
        "competencies": [
          "Auditoría Interna",
          "Ética Profesional"
        ]
      },
      {
        "id": "ehs_audi_18",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al redactar un plan de acción derivado de una no conformidad de auditoría, ¿qué características debe tener la acción correctiva según la metodología de mejora continua CAPA?",
        "options": [
          "Debe enfocarse en capacitar nuevamente al trabajador involucrado sin modificar procesos.",
          "Debe corregir el síntoma inmediato (acción de corrección) y eliminar la causa raíz identificada (acción correctiva) con un responsable asignado y una fecha límite realista de validación.",
          "Debe ser redactada en términos ambiguos para evitar auditorías de seguimiento estrictas.",
          "Debe consistir en comprar equipos más caros sin importar el análisis técnico."
        ],
        "answer": 1,
        "feedback": "Correcto. CAPA (Corrective and Preventive Action) exige diferenciar la corrección inmediata (apagar el fuego) de la acción correctiva que previene la recurrencia atacando la causa fundamental.",
        "reference": "ISO 45001:2018, Cláusula 10.2 (Incidentes, no conformidades y acciones correctivas)",
        "competencies": [
          "Mejora Continua",
          "Metodología CAPA"
        ]
      },
      {
        "id": "ehs_audi_19",
        "difficulty": "dificil",
        "type": "caso",
        "scenario": "⚖️ CASO INSPECCIÓN FEDERAL: Un inspector de la STPS se presenta en la planta para realizar una inspección ordinaria de condiciones generales de seguridad. Solicita ver los registros DC-3 de capacitación de los operadores de montacargas de los últimos 2 años.",
        "text": "El Supervisor EHS busca los expedientes pero solo tiene cartas de recomendación internas de los operadores.",
        "options": [
          "El inspector debe aceptar las cartas de recomendación ya que demuestran la habilidad práctica del operador.",
          "La empresa recibirá una sanción/multa administrativa directa por incumplimiento documental: los operadores de equipos móviles autopropulsados deben contar formalmente con la constancia de habilidades laborales DC-3 vigente emitida por capacitador registrado ante STPS.",
          "Se debe solicitar un aplazamiento de la inspección por 6 meses para realizar los trámites.",
          "Se debe convencer al inspector de que los operadores aprendieron solos en internet."
        ],
        "answer": 1,
        "feedback": "Correcto. La operación de maquinaria peligrosa (montacargas, grúas) exige la acreditación formal de la competencia mediante el formato oficial DC-3. Su ausencia es sancionable directamente en inspecciones federales.",
        "reference": "NOM-006-STPS-2023 (Almacenamiento y transporte de materiales), Numeral 5.7 / LFT Art. 153-A",
        "competencies": [
          "Cumplimiento Legal",
          "Auditoría de Documentos"
        ]
      },
      {
        "id": "ehs_audi_20",
        "difficulty": "experto",
        "type": "teorica",
        "text": "Al auditar un permiso de trabajo en alturas (PTS) ya cerrado, ¿cuál es la diferencia técnica entre auditar la 'Trazabilidad Documental' y realizar una 'Auditoría de Campo del Proceso'?",
        "options": [
          "No existe diferencia, ambas consisten en leer el papel firmado.",
          "La trazabilidad documental verifica firmas, fechas y anexos (checklists, planillas); la auditoría de campo (in situ o retrospectiva de proceso) evalúa si los controles descritos en el papel realmente se instalaron físicamente en el lugar de trabajo de forma efectiva.",
          "La auditoría de campo solo la hacen ingenieros externos.",
          "La trazabilidad se hace para cumplir al cliente y el campo se hace para la foto corporativa."
        ],
        "answer": 1,
        "feedback": "Correcto. Una auditoría de escritorio perfecta puede ocultar una operación de campo deficiente. La auditoría de procesos cruza la documentación con la realidad física (ej. verificar si el arnés firmado realmente existía y fue inspeccionado).",
        "reference": "ISO 19011:2018, Métodos de Auditoría (Combinación de revisiones de registros y observaciones in situ)",
        "competencies": [
          "Técnicas de Auditoría",
          "Verificación Física"
        ]
      }
    ],
    "modulo5_liderazgo": [
      {
        "id": "ehs_lide_01",
        "difficulty": "facil",
        "type": "teorica",
        "text": "Según la Curva de Bradley de Cultura de Seguridad, ¿cuál es el estado ideal al que debe aspirar una organización?",
        "options": [
          "Reactivo",
          "Dependiente",
          "Independiente",
          "Interdependiente (cuidado mutuo de los miembros del equipo)"
        ],
        "answer": 3,
        "feedback": "Correcto. La etapa 'Interdependiente' es la cúspide de la cultura de seguridad, donde los trabajadores se cuidan a sí mismos y cuidan de forma activa a sus compañeros de equipo.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_02",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Qué caracteriza a una organización en la etapa 'Reactiva' de la Curva de Bradley?",
        "options": [
          "Cumple estrictamente las leyes mediante controles automáticos.",
          "Solo actúa en seguridad cuando ocurre un accidente grave, buscando culpables del siniestro.",
          "Los trabajadores participan de los comités de forma voluntaria.",
          "Se prioriza la ergonomía y la salud mental proactivamente."
        ],
        "answer": 1,
        "feedback": "Correcto. La etapa reactiva no previene, actúa solo tras el daño (bombero de seguridad), enfocándose en culpar a las personas sin corregir los sistemas.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_03",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es la herramienta de comunicación clave del supervisor EHS para retroalimentar positivamente comportamientos seguros observados?",
        "options": [
          "El boletín de sanciones del mes.",
          "El refuerzo positivo inmediato: felicitar de forma específica in situ al trabajador que cumple las normas frente a su equipo.",
          "Ignorar el comportamiento para que no parezca favoritismo.",
          "Un aumento de sueldo automático."
        ],
        "answer": 1,
        "feedback": "Correcto. El refuerzo positivo aumenta notablemente la probabilidad de que el comportamiento seguro se repita, fortaleciendo el orgullo preventivo.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_04",
        "difficulty": "medio",
        "type": "teorica",
        "text": "El supervisor observa a un trabajador veterano omitiendo el uso de guantes protectores. Al llamarle la atención de forma privada, el operario le responde: 'Llevo 20 años haciendo esto así y nunca me ha pasado nada'. ¿Cuál es el mejor enfoque de liderazgo preventivo para abordar esta objeción?",
        "options": [
          "Ignorarlo debido a su gran experiencia y antigüedad laboral.",
          "Dialogar no punitivamente: reconocer su experiencia, explicar que los riesgos acumulativos y el azar no garantizan el futuro, y acordar que él sea el ejemplo de seguridad para los operarios jóvenes.",
          "Ponerle una multa económica inmediata.",
          "Discutir airadamente frente a los demás operarios."
        ],
        "answer": 1,
        "feedback": "Correcto. El sesgo de optimismo por antigüedad se combate con empatía, datos de riesgo acumulado y canalizando su liderazgo informal como modelo positivo.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_05",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Qué significa el concepto de 'Liderazgo Visible y Demostrado' (LVD) en seguridad?",
        "options": [
          "Pintar carteles con la foto del supervisor de EHS.",
          "Que la alta dirección y los supervisores participen físicamente en campo en actividades de seguridad (inspecciones, charlas, auditorías), demostrando con el ejemplo que la seguridad es una prioridad real.",
          "Publicar el manual de seguridad en la página web corporativa.",
          "Grabar videos de seguridad en oficinas administrativas."
        ],
        "answer": 1,
        "feedback": "Correcto. La cultura de seguridad se construye cuando los jefes demuestran con acciones consistentes (no solo en discursos) su compromiso inquebrantable.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_06",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Cuál es el propósito del programa de 'Seguridad Basada en el Comportamiento' (SBC)?",
        "options": [
          "Sancionar comportamientos extraños de los operarios.",
          "Observar conductas en el puesto de trabajo, retroalimentar los desvíos y reforzar los aciertos para generar hábitos preventivos conscientes.",
          "Llevar un registro de las tardanzas del personal.",
          "Modificar la maquinaria mediante sensores automáticos."
        ],
        "answer": 1,
        "feedback": "Correcto. La SBC se enfoca en las conductas observables humanas (actos), entendiendo que el comportamiento es el factor crítico en la mayoría de los accidentes.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_07",
        "difficulty": "medio",
        "type": "teorica",
        "text": "Al realizar una observación de seguridad, se detecta un comportamiento inseguro. El supervisor de EHS debe corregirlo mediante:",
        "options": [
          "Gritos y amonestación pública in situ.",
          "Una conversación privada de retroalimentación de 3 pasos: Describir el desvío observado, preguntar los motivos de la conducta y acordar el comportamiento correcto a seguir.",
          "Enviar un correo general a toda la planta sin nombres.",
          "Reportar al trabajador directamente a recursos humanos sin hablar con él."
        ],
        "answer": 1,
        "feedback": "Correcto. La retroalimentación de 3 pasos educa y genera compromiso autónomo del operario, evitando resentimientos.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_08",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Qué establece la teoría del 'Iceberg de Heinrich' modificada respecto a los incidentes laborales?",
        "options": [
          "Que los accidentes ocurren principalmente en zonas frías.",
          "Que por cada accidente mortal o grave ocurren cientos de incidentes leves, daños materiales y miles de actos y condiciones inseguras no controladas en la base.",
          "Que las pérdidas directas financieras son mayores que los costos de prevención.",
          "Que el supervisor solo ve el 10% de los presupuestos."
        ],
        "answer": 1,
        "feedback": "Correcto. Heinrich demostró la relación geométrica de siniestralidad. Si el supervisor enfoca sus esfuerzos en eliminar los miles de actos e incidentes menores en la base, la probabilidad de accidentes fatales colapsa a cero.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_09",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "Un supervisor EHS nota que el porcentaje de uso de EPP disminuye drásticamente cuando los supervisores de producción no están presentes en el área. ¿Qué nivel de cultura de Bradley presenta el área?",
        "options": [
          "Etapa Interdependiente",
          "Etapa Dependiente",
          "Etapa Independiente",
          "Etapa Reactiva pura"
        ],
        "answer": 1,
        "feedback": "Correcto. En la etapa dependiente, el cumplimiento está supeditado a la supervisión física y el miedo a la sanción. El desafío es transitar a la independencia, donde se use por convicción propia.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_10",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cómo influye una 'Cultura Justa' en el reporte de near misses en la empresa?",
        "options": [
          "Sanciona severamente cualquier error cometido.",
          "Diferencia claramente el error humano no intencional (que no se penaliza para fomentar el reporte transparente) de la violación deliberada de normas críticas (que sí tiene consecuencias disciplinarias).",
          "Elimina todas las sanciones disciplinarias de la planta.",
          "Exige que todos los reportes sean anónimos permanentemente."
        ],
        "answer": 1,
        "feedback": "Correcto. La cultura justa promueve la confianza psicológica: el trabajador reporta fallas sin miedo a represalias por errores humanos honestos, permitiendo la mejora del sistema.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_11",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📋 CASO DE CONFLICTO OPERATIVO: Hay un retraso de 3 horas en el arranque de la línea de embotellado por falta de mantenimiento en una válvula de purga a 4 metros de altura. El supervisor de producción presiona a un mecánico para que suba a la viga sin línea de vida 'porque es rápido y la empresa pierde miles de dólares por minuto'. El supervisor EHS observa la escena.",
        "text": "Elija la intervención del supervisor EHS que demuestre liderazgo con influencia estratégica:",
        "options": [
          "Permitir la labor firmando una exención de responsabilidad para la línea de producción.",
          "Detener la maniobra, reunir al supervisor de producción y al mecánico, explicar el riesgo letal inminente y proponer una solución alternativa ágil (ej. usar la plataforma retráctil disponible a un costado o instalar línea temporal rápida) logrando hacer la labor de forma segura en pocos minutos extra.",
          "Llamar a la policía o al cuerpo de bomberos local para retirar al operario por la fuerza.",
          "Pelear a gritos con el supervisor de producción hasta que uno de los dos se retire."
        ],
        "answer": 1,
        "feedback": "Correcto. El liderazgo estratégico EHS combina el firme cumplimiento del control crítico anticaídas con la capacidad de proponer soluciones operativas ágiles que no bloqueen los procesos de producción.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_12",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "📊 CASO DE CULTURA DE SEGURIDAD: Tras implementar un programa de Seguridad Basada en el Comportamiento, los reportes de desvíos aumentaron en 300% en Q1, pero la tasa de accidentes se mantuvo igual. La gerencia general concluye que el programa de comportamiento es un fracaso y propone cerrarlo y despedir al supervisor EHS.",
        "text": "¿Cómo defiende el supervisor de EHS técnicamente el programa?",
        "options": [
          "Aceptar la decisión y proponer volver a las multas tradicionales.",
          "Demostrar que el aumento en los reportes es un indicador Leading positivo que evidencia mayor confianza para reportar peligros ocultos. Explicar que la estabilización de accidentes requiere un desfase temporal y proponer enfocar las acciones del Q2 en corregir las condiciones sistémicas reportadas.",
          "Decir que los gerentes no entienden de seguridad.",
          "Rehacer los reportes de accidentes anteriores para simular una caída drástica en las estadísticas."
        ],
        "answer": 1,
        "feedback": "Correcto. El aumento de reportes es señal de reducción del subregistro y fomento de cultura participativa. Cortar el programa en el pico de reportes condena a la empresa a seguir sufriendo accidentes graves.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_13",
        "difficulty": "facil",
        "type": "teorica",
        "text": "¿Cuál es el valor que impulsa la seguridad en una organización interdependiente?",
        "options": [
          "El temor al despido por parte del jefe.",
          "El valor del autocuidado y el cuidado mutuo de los compañeros.",
          "La meta de alcanzar cero multas estatales.",
          "El cumplimiento del presupuesto del área."
        ],
        "answer": 1,
        "feedback": "Correcto. En la interdependencia, la seguridad se convierte en un valor ético arraigado: 'Yo me cuido y cuido a mi compañero porque nos importamos'.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_14",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Por qué el castigo sistemático de los near misses destruye la cultura de prevención?",
        "options": [
          "Porque aumenta las primas del seguro de accidentes.",
          "Porque provoca que el personal oculte los incidentes (subregistro) por temor a represalias, perdiendo oportunidades clave de prevención.",
          "Porque requiere demasiada papelería administrativa.",
          "Porque no está permitido por el sindicato."
        ],
        "answer": 1,
        "feedback": "Correcto. Los sistemas punitivos fomentan el miedo y el silencio. Si cometer un error leve conlleva sanción directa, los operarios ocultarán los peligros hasta que sea tarde.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_15",
        "difficulty": "experto",
        "type": "orden",
        "text": "Ordene los pasos para realizar una retroalimentación positiva efectiva (reconocimiento) ante una conducta segura en campo:",
        "items": [
          "Observar el comportamiento seguro específico del trabajador (ej. uso completo de arnés y barbuquejo).",
          "Aproximarse respetuosamente y saludar al trabajador in situ.",
          "Describir de forma exacta la conducta segura observada y felicitarlo por su compromiso.",
          "Explicar el impacto positivo de su conducta (ej. evitar lesiones graves y dar el ejemplo al equipo).",
          "Agradecer el compromiso y alentar a mantener ese estándar preventivo diario."
        ],
        "correctOrder": [
          0,
          1,
          2,
          3,
          4
        ],
        "feedback": "Correcto. Observar ➔ Saludar ➔ Describir y felicitar ➔ Explicar impacto ➔ Alentar. El reconocimiento estructurado y oportuno refuerza los hábitos seguros.",
        "reference": "ModeloBradley de Cultura / LFT Artículo 512-B / Seguridad Basada en Comportamiento (SBC)",
        "competencies": [
          "Cultura de Seguridad",
          "Liderazgo con Influencia"
        ]
      },
      {
        "id": "ehs_lide_16",
        "difficulty": "facil",
        "type": "caso",
        "scenario": "📋 CASO COMISIÓN MIXTA: En las reuniones mensuales de la Comisión de Seguridad e Higiene, los representantes de los trabajadores no participan activamente y dicen que 'la empresa no hace caso a los reportes de fugas de agua y barandales sueltos'. El gerente de planta dice que no hay presupuesto.",
        "text": "¿Cuál es la intervención de liderazgo correcta para el Supervisor EHS?",
        "options": [
          "Amonestar por escrito a los representantes por no participar.",
          "Crear una matriz de hallazgos de la Comisión con priorización basada en riesgo (matriz de severidad), presentarla al gerente demostrando el costo de multas legales por barandales sueltos, y dar retroalimentación semanal a los delegados sobre el avance de las reparaciones prioritarias.",
          "Cancelar las reuniones para no perder tiempo productivo.",
          "Reparar las fugas de agua él mismo los fines de semana."
        ],
        "answer": 1,
        "feedback": "Correcto. El líder EHS influye en la dirección traduciendo riesgos físicos a costos de multas y pasivos legales, al tiempo que mantiene la confianza de los operarios garantizando transparencia y respuesta oportuna sobre sus reportes.",
        "reference": "NOM-019-STPS-2011, Numeral 8.2 / Técnicas de Influencia Gerencial",
        "competencies": [
          "Liderazgo con Influencia",
          "Gestión de Comités"
        ]
      },
      {
        "id": "ehs_lide_17",
        "difficulty": "medio",
        "type": "teorica",
        "text": "¿Por qué un enfoque centrado exclusivamente en indicadores reactivos (Lagging KPI) como la Tasa de Incidentes (TIFR) puede dar una falsa sensación de seguridad en la gestión EHS de la organización?",
        "options": [
          "Porque los datos de accidentes son siempre falsos o manipulados.",
          "Porque una tasa baja de accidentes puede deberse simplemente al azar o al subregistro de lesiones menores en una planta peligrosa, mientras que los indicadores leading (proactivos) miden el estado real de los controles de prevención vigentes.",
          "Porque los reactivos solo se calculan en dólares y no en número de lesionados.",
          "Porque la ley prohíbe el uso de indicadores lagging."
        ],
        "answer": 1,
        "feedback": "Correcto. Tener 'cero accidentes' no garantiza tener seguridad. Una empresa puede estar al borde de una catástrofe por falta de mantenimiento en líneas críticas (leading fallido) a pesar de tener una TIFR limpia por pura suerte temporal.",
        "reference": "Modelos de Indicadores Preventivos de la OIT / ANSI Z10",
        "competencies": [
          "Métricas de Desempeño",
          "Liderazgo Preventivo"
        ]
      },
      {
        "id": "ehs_lide_18",
        "difficulty": "medio",
        "type": "caso",
        "scenario": "📊 CASO DIAGNÓSTICO: La gerencia desea evaluar la cultura de seguridad de la planta. Proponen medirla únicamente sumando el número de firmas de asistencia a las pláticas diarias de 5 minutos.",
        "text": "¿Cuál es la recomendación técnica del Supervisor EHS?",
        "options": [
          "Apoyar la propuesta ya que la firma demuestra el interés real del trabajador.",
          "Rechazar la propuesta y proponer una evaluación integral y metodológica mediante encuestas anónimas de percepción de cultura, entrevistas con personal operativo y auditoría de la disposición de reporte de incidentes sin represalias.",
          "Sugerir que se mida por el número de amonestaciones de seguridad aplicadas.",
          "Proponer que no se mida nada y se asuma que la cultura es óptima."
        ],
        "answer": 1,
        "feedback": "Correcto. La asistencia a charlas es un indicador de cumplimiento formal, no de cultura real. La cultura se mide en las actitudes, la confianza para reportar desvíos y el comportamiento autónomo del personal cuando nadie los vigila.",
        "reference": "Métodos de Diagnóstico de Cultura de Seguridad (Cooper's Reciprocal Safety Culture Model)",
        "competencies": [
          "Cultura Organizacional",
          "Diagnóstico EHS"
        ]
      },
      {
        "id": "ehs_lide_19",
        "difficulty": "dificil",
        "type": "teorica",
        "text": "¿Cómo se define el concepto de 'Seguridad Psicológica' en un equipo de trabajo y cuál es su impacto directo en la reducción de siniestralidad industrial?",
        "options": [
          "Es la obligatoriedad de contar con psicólogos clínicos en la enfermería de la planta.",
          "Es la creencia compartida de que el equipo es un entorno seguro para asumir riesgos interpersonales, como reportar errores, admitir fallas en procedimientos o detener una tarea por seguridad, sin temor a burlas, regaños o represalias laborales.",
          "Es la prohibición de hablar de temas personales durante la jornada.",
          "Es una teoría de recursos humanos que no aplica a la seguridad física."
        ],
        "answer": 1,
        "feedback": "Correcto. La seguridad psicológica es la base de la cultura preventiva. Si un operario teme reportar que no entendió un procedimiento o que un equipo falla por miedo a ser regañado, ocultará el desvío hasta que se convierta en un accidente grave.",
        "reference": "Modelo de Seguridad Psicológica de Amy Edmondson (Harvard Business School)",
        "competencies": [
          "Factores Humanos",
          "Seguridad Psicológica"
        ]
      },
      {
        "id": "ehs_lide_20",
        "difficulty": "experto",
        "type": "caso",
        "scenario": "🏆 CASO RECONOCIMIENTO: El Supervisor EHS desea implementar un programa de incentivos para mejorar la cultura preventiva. El departamento de finanzas autoriza un bono en efectivo mensual para la cuadrilla que reporte 'cero incidentes'.",
        "text": "¿Por qué este tipo de incentivos basados en resultados de cero accidentes es considerado contraproducente por los estándares modernos de EHS?",
        "options": [
          "Porque representa un costo financiero muy alto para la empresa.",
          "Porque incentiva el ocultamiento de accidentes y desvíos (subregistro) dentro del equipo para no perder el bono, creando un peligro latente grave.",
          "Porque los trabajadores prefieren premios físicos en lugar de dinero en efectivo.",
          "Porque fomenta la rivalidad hostil entre los operarios y los supervisores."
        ],
        "answer": 1,
        "feedback": "Correcto. Sancionar o premiar basándose en resultados lagging (cero accidentes) es un error clásico de liderazgo. Fomenta que se escondan las lesiones. Los programas de incentivos modernos premian comportamientos leading (ej. número de reportes de riesgos corregidos, JSAs excelentes o participación en simulacros).",
        "reference": "Estándares ANSI Z10 / Directrices OSHA sobre Programas de Incentivos de Seguridad",
        "competencies": [
          "Sistemas de Incentivos",
          "Liderazgo con Influencia"
        ]
      }
    ]
  }
};

// Exponer de forma compatible con navegador local (file://)
if (typeof window !== 'undefined') {
  window.examQuestions = questionBank;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionBank;
}
