const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const authRouter = express.Router(); // if in case hume 'app.js' ke alawa aur kisi file me routes create karne padte hain toh "express.Router()" ki need padti hai


/**
 * /api/auth/register
 */
authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address.",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token); // generated token ko server cookie storage me rkh deta hai aur waha se read krleta hai jab bhi client request jati hai server pe!!

  res.status(201).json({
    message: "User registered successfully",
    user,
    token
  });
});


authRouter.get("/register", async(Req, res) => {
  const user = await userModel.find();

  res.status(200).json({
    message: "User fetched...",
    user
  });
});


module.exports = authRouter;