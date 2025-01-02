// import StudentController
const StudentController = require("../Controller/StudentController");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

// student routes
router.get("/students", StudentController.index);
router.get("/students/:id", StudentController.find);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export router
module.exports = router;
