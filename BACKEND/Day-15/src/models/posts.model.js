const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },

    imgUrl: {
        type: String,
        required: [true, "ImgUrl is required."]
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "UserId is required for creating a post"]
    }
});


const postModel = mongoose.model("posts", postSchema);


module.exports = postModel;