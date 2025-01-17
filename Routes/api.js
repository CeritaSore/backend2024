// import NewsController
const NewsController = require("../Controller/NewsController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", NewsController.index);
router.post("/", NewsController.store);
router.put("/:id", NewsController.update);

// Membuat routing news

// export router
module.exports = router;
