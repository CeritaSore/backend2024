const db = require("../Config/database");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM student";

      db.query(query, (err, results) => {
        resolve(results);
      });
    });
  }
  static store(data) {
    return new Promise((resolve, reject) => {
      const sql =
        "insert into student (nama,nim,email,jurusan) value (?,?,?,?)";
      db.query(
        sql,
        [data.nama, data.nim, data.email, data.jurusan],
        (err, result) => {
          if (err) {
            reject(err); // Handle error
          } else {
            resolve({ id: result.insertId, ...data }); // Return data yang disimpan
          }
        }
      );
    });
  }
  static update(data, id) {
    return new Promise((resolve, reject) => {
      const sql =
        "UPDATE student SET nama = ?, nim = ?, email = ?, jurusan = ? WHERE id = ?";

      db.query(
        sql,
        [data.nama, data.nim, data.email, data.jurusan, id],
        (err, result) => {
          if (err) {
            reject(err); // Menangani error jika query gagal
          } else {
            if (result.affectedRows === 0) {
              reject(new Error("Data tidak ditemukan")); // Jika tidak ada row yang diupdate
            } else {
              // Mengambil data yang diperbarui
              const updatedData = { id, ...data }; // Menggabungkan id dan data baru
              resolve(updatedData); // Mengembalikan data yang diperbarui
            }
          }
        }
      );
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "select * from student where id=?";
      db.query(sql, [id], (err, results) => {
        resolve(results);
      });
    });
  }
  static destroy(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM student WHERE id=?";
      db.query(sql, [id], (err, result) => {
        if (err) {
          reject({
            message: "Terjadi kesalahan pada query",
            error: err.message,
          }); // Kirim error dalam bentuk JSON-friendly
        } else {
          if (result.affectedRows === 0) {
            reject({ message: "Data tidak ditemukan" }); // Jika tidak ada data yang dihapus
          } else {
            resolve({ message: "Data berhasil dihapus", id }); // Informasi penghapusan
          }
        }
      });
    });
  }
}

module.exports = Student;
