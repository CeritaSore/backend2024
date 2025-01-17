// import database
const db = require("../Config/database");
const { query } = require("express");

// membuat class News
class News {
  // buat fungsi
  static all() {
    return new Promise((resolve, reject) => {
      const sqlquery = "select * from news";
      db.query(sqlquery, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  static store(data) {
    return new Promise((resolve, reject) => {
      const sqlquery = `INSERT INTO news (title, author, description, content, category) VALUES (?, ?, ?, ?, ?)`;
      db.query(
        sqlquery,
        [
          data.title,
          data.author,
          data.description,
          data.content,
          data.category,
        ],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve({ id: results.insertId, ...data });
          }
        }
      );
    });
  }
  static update(data, id) {
    return new Promise((resolve, reject) => {
      const sqlquery =
        "UPDATE news SET title=?, author=?, description=?, content=?, category=? WHERE id = ? ";
      db.query(
        sqlquery,
        [
          data.title,
          data.author,
          data.description,
          data.content,
          data.category,
          id,
        ],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.affectedRows === 0) {
              reject(new Error("Resource not found"));
            } else {
              const updatedData = { id, ...data };
              resolve(updatedData);
            }
          }
        }
      );
    });
  }
  static destroy(id) {
    const sqlquery = "delete from news where id = ?";
    db.query(sqlquery, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "select * from news where id=?";
      db.query(sql, [id], (err, results) => {
        resolve(results);
      });
    });
  }
  static search(word) {
    return new Promise((resolve, reject) => {
      const sqlquery = "SELECT * FROM news WHERE title LIKE ?";
      db.query(sqlquery, [`%${word}%`], (err, results) => {
        if (err) {
          reject(err); // Reject the promise if there is an error
        } else {
          resolve(results);
        }
      });
    });
  }

  //   static all() {
  //   }
}

// export class News
module.exports = News;
