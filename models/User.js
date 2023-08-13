const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "fullname is required!"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required!"],
  },
  password: {
    type: String,
    required: [true, "password is required!"],
  },
});

module.exports = model("User", userSchema);
