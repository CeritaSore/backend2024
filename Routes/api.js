// import NewsController
const NewsController = require("../Controller/NewsController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/news", NewsController.index);
router.post("/news", NewsController.store);
router.put("/news/:id", NewsController.update);
router.delete("/news/:id", NewsController.destroy);
router.get("/news/:id", NewsController.find);
router.get("/news/search/:title", NewsController.search);
router.get("/news/category/sport", NewsController.sportsearch);
router.get("/news/category/finance", NewsController.financesearch);
router.get("/news/category/automotive", NewsController.automotivesearch);

// Membuat routing news

// export router
module.exports = router;
