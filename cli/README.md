// const db = new Database();

// db.run(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     isActive BOOLEAN,
//     age INTEGER
//   );
//   `);

// const insert = db.prepare(
//   "INSERT INTO users (name, isActive, age) VALUES ($name, $isActive, $age)"
// );
// const insertUsers = db.transaction((cats) => {
//   for (const cat of cats) insert.run(cat);
//   return cats.length;
// });

// const count = insertUsers(users);

// console.log(`Inserted ${count} users`);

// const result = db.query(`SELECT * FROM users`).all();

// console.log(result);
