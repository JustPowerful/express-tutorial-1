const User = require("../models/User");
module.exports = async (req, res, next) => {
  if (!req.session.userId) {
    return res.send("You are not authorized to visit this page. please login.");
  }
  const user = await User.findById(req.session.userId);
  if (user) {
    next();
  } else {
    res.send("User doesn't exist. please login.");
  }
};
