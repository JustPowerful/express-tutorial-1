const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/auth", require("./routers/auth.router"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
