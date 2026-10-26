// SQLite database setup for the Node.js backend.
// Run: npm install
// Then: npm start
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./beauty_parlor.db');
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL, mobile TEXT, password TEXT NOT NULL)`);
  db.run(`CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, price REAL NOT NULL)`);
  db.run(`CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, name TEXT,
    mobile TEXT, service TEXT, date TEXT, time TEXT, status TEXT DEFAULT 'Booked')`);
  db.run(`CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, message TEXT)`);
});
module.exports = db;
