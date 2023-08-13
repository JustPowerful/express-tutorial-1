const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// Connecting to mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/myblog");

app.use("/auth", require("./routers/auth.router"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
