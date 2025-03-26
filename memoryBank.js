const sqlite3 = require('sqlite3').verbose();

class MemoryBank {
  constructor(dbPath = ':memory:') {
    this.db = new sqlite3.Database(dbPath);

    // Initialize database with a simple key-value table
    this.db.serialize(() => {
      this.db.run(`
        CREATE TABLE IF NOT EXISTS store (
          key TEXT PRIMARY KEY,
          value TEXT,
          timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
    });
  }

  async set(key, value) {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT OR REPLACE INTO store (key, value) VALUES (?, ?)`,
        [key, JSON.stringify(value)],
        (err) => err ? reject(err) : resolve()
      );
    });
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      this.db.get(
        `SELECT value FROM store WHERE key = ?`,
        [key],
        (err, row) => {
          if (err) return reject(err);
          resolve(row ? JSON.parse(row.value) : null);
        }
      );
    });
  }

  async delete(key) {
    return new Promise((resolve, reject) => {
      this.db.run(
        `DELETE FROM store WHERE key = ?`,
        [key],
        (err) => err ? reject(err) : resolve()
      );
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT key, value FROM store`,
        [],
        (err, rows) => {
          if (err) return reject(err);
          resolve(rows.map(row => ({
            key: row.key,
            value: JSON.parse(row.value)
          })));
        }
      );
    });
  }

  close() {
    this.db.close();
  }
}

module.exports = MemoryBank;
