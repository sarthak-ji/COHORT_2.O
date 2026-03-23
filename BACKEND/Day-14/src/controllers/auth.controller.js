const userModel = require("../models/user.model");
// const crypto = require("crypto"); // low-level package for security -> ...
const bcrypt = require("bcryptjs") // "Bcryptjs package is the high-level security package"
const jwt = require("jsonwebtoken");

/* Register API */
async function registerController(req, res) {
  const { username, email, password, bio, profile_picture } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "User already exists" +
        (isUserAlreadyExists.email = email
          ? "email already exists"
          : "username already exists"),
    });
  }

  // const hash = crypto.createHash("sha256").update(password).digest("hex"); // with "Crypto"
  const hash = await bcrypt.hash(password, 10) // with "Bcryptjs"

  const user = await userModel.create({
    username,
    email,
    bio,
    password: hash,
    profile_picture,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.status(201).json({
    message: "User registered successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profile_picture: user.profile_picture,
    },
  });
}

/* Login API */
async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
  }

  // const hash = crypto.createHash("sha256").update(password).digest("hex");

  // const isPasswordValid = hash == user.password;

  const isPasswordValid = await bcrypt.compare(password, user.password);
  

  if (isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profile_picture: user.profile_picture,
    },
  });
}

module.exports = {
  registerController,
  loginController,
};

