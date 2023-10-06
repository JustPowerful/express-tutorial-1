const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// Connecting to mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/myblog");

app.use("/auth", require("./routers/auth.router"));
app.get(
  "/auth/profile",
  require("./middleware/auth.middleware"),
  async (req, res) => {
    res.render("user/profile");
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
