const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
exports.getRegister = (req, res) => {
  res.render("register");
};
exports.postRegister = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  try {
    if (password !== confirmPassword) {
      return res.send("The password is not correct!");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.redirect("/auth/login");
  } catch (error) {
    res.send("There was a server error when saving user.");
  }
};

// Login
exports.getLogin = (req, res) => {
  res.render("login");
};
exports.postLogin = (req, res) => {};
