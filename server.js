const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar CORS para permitir peticiones locales
app.use(cors());
app.use(express.json());

// Conectar a SQLite
const dbPath = path.join(__dirname, 'exams_db.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error abriendo base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
    
    // Crear tabla de exámenes si no existe
    db.run(`CREATE TABLE IF NOT EXISTS exams (
      id TEXT PRIMARY KEY,
      participantId TEXT,
      examDate TEXT,
      totalTimeSeconds INTEGER,
      averageTimePerQuestion INTEGER,
      score INTEGER,
      aprobado BOOLEAN,
      difficultyPath TEXT,
      areasWeak TEXT,
      areasStrong TEXT,
      warningsCount INTEGER,
      flagForReview TEXT,
      historialRespuestas TEXT
    )`);
  }
});

// Endpoint: Obtener todos los exámenes
app.get('/api/exams', (req, res) => {
  db.all("SELECT * FROM exams", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    
    // Parsear los JSON que se guardaron como texto
    const parsedRows = rows.map(row => ({
      ...row,
      aprobado: row.aprobado === 1,
      difficultyPath: JSON.parse(row.difficultyPath || '[]'),
      areasWeak: JSON.parse(row.areasWeak || '[]'),
      areasStrong: JSON.parse(row.areasStrong || '[]'),
      flagForReview: JSON.parse(row.flagForReview || '[]'),
      historialRespuestas: JSON.parse(row.historialRespuestas || '[]')
    }));
    
    res.json(parsedRows);
  });
});

// Endpoint: Guardar un nuevo examen
app.post('/api/exams', (req, res) => {
  const {
    id, participantId, examDate, totalTimeSeconds, averageTimePerQuestion,
    score, aprobado, difficultyPath, areasWeak, areasStrong,
    warningsCount, flagForReview, historialRespuestas
  } = req.body;

  const sql = `INSERT INTO exams (
    id, participantId, examDate, totalTimeSeconds, averageTimePerQuestion,
    score, aprobado, difficultyPath, areasWeak, areasStrong,
    warningsCount, flagForReview, historialRespuestas
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const params = [
    id, participantId, examDate, totalTimeSeconds, averageTimePerQuestion,
    score, aprobado ? 1 : 0, 
    JSON.stringify(difficultyPath), JSON.stringify(areasWeak), JSON.stringify(areasStrong),
    warningsCount, JSON.stringify(flagForReview), JSON.stringify(historialRespuestas)
  ];

  db.run(sql, params, function(err) {
    if (err) {
      // Si el id ya existe (ej. reintento idéntico), retornamos error, aunque es raro con Date.now()
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({ message: "Examen guardado con éxito", id });
  });
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor Hub EHS corriendo en http://0.0.0.0:${PORT}`);
});
