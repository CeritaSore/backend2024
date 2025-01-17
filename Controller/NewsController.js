// import Model News

const News = require("../Model/News");

// buat class NewsController
class NewsController {
  async index(req, res) {
    const news = await News.all();
    let data;
    if (news.length === 0) {
      data = {
        message: "Data is Empty",
        data: [],
      };
    } else {
      data = {
        message: "Get All Resource",
        data: news,
      };
    }
    res.json(data);
  }
  async store(req, res) {
    const getdata = req.body;
    if (
      (!getdata.title,
      !getdata.author,
      !getdata.description,
      !getdata.content,
      !getdata.category)
    ) {
      const data = {
        message: "All field must be filled correctly",
        data: getdata,
      };
      res.status(422).json(data);
    }
    const storedata = await News.store(getdata);
    const displaydata = {
      message: "Resource is added successfully",
      data: storedata,
    };
    res.json(displaydata);
  }
  async update(req, res) {
    const getid = req.params.id;
    const getbody = req.body;

    // Validasi input, semua field harus diisi
    if (
      !getbody.title ||
      !getbody.author ||
      !getbody.description ||
      !getbody.content ||
      !getbody.category
    ) {
      return res.status(400).json({
        message: "All fields must be filled correctly",
      });
    }

    try {
      // Panggil method update di model
      const updatedata = await News.update(getbody, getid);

      // Jika berhasil, respons dengan status 200
      return res.status(200).json({
        message: "Resource is updated successfully",
        data: updatedata,
      });
    } catch (err) {
      // Jika resource tidak ditemukan, tampilkan status 404
      if (err.message === "Resource not found") {
        return res.status(404).json({
          message: "Resource not found",
        });
      }

      // Jika ada error lain, respons dengan status 500
      return res.status(500).json({
        message: "An error occurred",
        error: err.message,
      });
    }
  }
}

// membuat object NewsController
const object = new NewsController();

// export object NewsController
module.exports = object;
