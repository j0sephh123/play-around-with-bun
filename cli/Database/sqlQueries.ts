const sqlQueries = {
  createUsersTable: `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      isActive BOOLEAN,
      age INTEGER
    );
    `,
  doesUsersTableExist:
    "SELECT name FROM sqlite_master WHERE type='table' AND name='users'",
  insertIntoUsers:
    "INSERT INTO users (name, isActive, age) VALUES ($name, $isActive, $age)",
  countUserRecords: "SELECT COUNT(*) as count FROM users",
  selectAllUsers: "SELECT * FROM users",
};

export type SqlQueries = keyof typeof sqlQueries;

export default sqlQueries;
