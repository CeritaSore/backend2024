const Student = require("../Model/Student");

class StudentController {
  // Mendapatkan seluruh resource
  async index(req, res) {
    const students = await Student.all();
    if (students.length > 0) {
      const data = {
        message: "Menampilkan data student",
        data: students,
      };
      res.json(data);
    } else {
      const data = {
        message: "Data tidak tersedia",
      };
      res.status(404).json(data); // Menambahkan respons jika data tidak ditemukan
    }
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dimasukkan",
      };
      return res.status(422).json(data);
    }
    const storestudent = await Student.store(req.body);
    const data = {
      message: "berhasil input",
      data: storestudent,
    };
    res.status(200).json(data);
  }
  async update(req, res) {
    const id = req.params.id;
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      return res.status(422).json({ message: "Data tidak lengkap" });
    }

    try {
      const updatestudent = await Student.update(
        { nama, nim, email, jurusan },
        id
      );

      const data = {
        message: "Berhasil mengupdate data",
        data: updatestudent,
      };
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async find(req, res) {
    const id = req.params.id;
    const getdata = await Student.find(id);
    if (getdata.length === 0) {
      const data = {
        message: "data tidak ditemukan",
      };
      res.json(data);
    } else {
      const data = {
        message: `data ditemukan pada id ${id}`,
        data: getdata,
      };
      res.json(data);
    }
  }
  async destroy(req, res) {
    const id = req.params.id;
    try {
      const result = await Student.destroy(id);
      res.json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
