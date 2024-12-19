const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/Users");

// register

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "some error occured",
    });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {
    console.log(error);
    res.Status(500).json({
      success: false,
      message: "Failed to register user",
    });
  }
};
// logout

// auth middleware

module.exports = { registerUser };
