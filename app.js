const express = require("express");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

// Middleware untuk parsing JSON dan URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Menggunakan routing dari routes/api.js
app.use("/", apiRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});