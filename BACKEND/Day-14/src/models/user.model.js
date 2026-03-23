const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "User already exists with this email address"],
    required: [true, "Email address is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,

  profile_picture: {
    type: String,
    default: "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_user_personalization&w=740&q=80"
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
