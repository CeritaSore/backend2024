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
          ,
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
  //   static all() {
  //   }
}

// export class News
module.exports = News;
