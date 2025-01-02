const Student = require("../Model/Student");

class StudentController {
  // Mendapatkan seluruh resource
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkan data student",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    const student = await Student.store(req.body);
    const data = {
      message: "berhasil membuat data",
      data: student,
    };
    res.json(data);
  }
  async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, jurusan } = req.body;
    const updatestudent = await Student.update(
      { nama, nim, email, jurusan },
      id // Data yang akan diperbarui
      // Kondisi pencarian berdasarkan id
    );
    if (updatestudent[0] === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(updatestudent);
  }
  async find(req, res) {
    const id = req.params.id;
    const getdata = await Student.find(id);
    const data = {
      message: "data ditemukan",
      data: getdata,
    };
    res.json(data);
  }
  async destroy(req, res) {
    const id = req.params.id;
    const deletedata = await Student.destroy(id);
    if (deletedata) {
      const data = {
        message: "data dihapus",
      };
      res.json(data);
    }else{
      res.status(500).json('data tidak ditemukan');

    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;