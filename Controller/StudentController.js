// TODO 3: Import data students dari folder data/students.js
const students = require("../data/student");

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    res.status(200).json(students);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    const { nama } = req.body;
    students.push(nama);
    const data = [
      {
        message: "data store successfully",
        data: students,
      },
    ];
    res.status(200).json(data);
  }

  update(req, res) {
    // TODO 6: Update data students
    const { id } = req.params; // Ambil index dan ubah ke angka
    const { nama } = req.body; // Ambil nama dari body request
    students[id] = nama;
    res.status(200).json(students);
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const { id } = req.params;
    if (id >= 0 && id < students.length) {
      students.splice(id, 1);
    }
    res.status(200).json(students);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
