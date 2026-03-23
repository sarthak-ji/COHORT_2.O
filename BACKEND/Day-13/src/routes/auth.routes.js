const express = require("express");
const userModel = require("../models/user.model");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // low-level package for security -> "Bcryptjs package is the high-level security package"

/**
 * /api/auth/register
 */
authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyRegistered = await userModel.findOne({ email });

  if (isUserAlreadyRegistered) {
    return res.status(409).json({
      message: "User already exists with this email address.",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "User registered successfully",
    user,
    token,
  });
});


/**
 * POST /api/auth/login
 */
authRouter.post("/login", async(req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(404).json({
            message: "User not found with this email address"
        });
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex");

    if(isPasswordMatched){
        return res.status(401).json({
            message: "Password is invalid"
        });
    }

    const token = jwt.sign(
        {
            id:user._id,
        }, process.env.JWT_SECRET
    );

    res.cookie("jwt_token", token);

    res.status(200).json({
        message: "User logged in",
        user
    });
});


module.exports = authRouter;