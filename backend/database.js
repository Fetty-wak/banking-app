const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to SQLite DB (file will be created if it doesn't exist)
const dbPath = path.resolve(__dirname, 'banking.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening DB:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Create users table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    password TEXT,
    balance REAL DEFAULT 0.0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`, (err) => {
  if (err) {
    console.error('Error creating users table:', err.message);
  } else {
    console.log('Users table ready.');
  }
});

module.exports = db;
