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
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("Please fill all the fields.");
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.send("Wrong email or password");
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.send("Wrong email or password");
  }

  // store session
  req.session.userId = user._id;
  res.redirect("/auth/profile");
};

exports.logout = async (req, res) => {
  req.session.destroy();
  res.redirect("/auth/login");
};
