const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UsersModel = require("../Models/Users.js");
const generateTokenandCookie = require("../utils/generatoken.js");

router.post("/signup", async (req, res) => {
  const { email, password, fullname } = req.body;
  try {
    // Check if user with the same email already exists
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "UserExists" });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UsersModel({
      fullname,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    generateTokenandCookie(savedUser._id, res);
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModel.findOne({ email });
    if (user) {
      // Compare the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        generateTokenandCookie(user._id, res);
        res.json(user);
      } else {
        res.status(401).json({ error: "Incorrect password" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/logout", async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
