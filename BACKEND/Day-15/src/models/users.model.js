const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        unique: [true, "Username already exists."]
    },

    email: {
        type: String,
        required: [true, "eamil is required."],
        unique: [true, "email already exists."]
    },

    password: {
        type: String,
        required: [true, "Password is required."]
    },

    profile_pic: {
        type: String,
        default: "https://ik.imagekit.io/5aqxteobf/istockphoto-1477583639-612x612.jpg?updatedAt=1771524006436"
    },

    bio: String

});


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;