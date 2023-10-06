const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth.controller");

// REGISTER route
router.get("/register", controller.getRegister); // GET request
router.post("/register", controller.postRegister); // POST request

// LOGIN route
router.get("/login", controller.getLogin); // GET request
router.post("/login", controller.postLogin); // POST request
router.post("/logout", controller.logout);

module.exports = router;
