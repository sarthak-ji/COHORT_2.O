const express = require("express");
const postController = require("../controllers/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });



/**
 * POST /api/posts [protected - means jiske pass token hoga woh hi iss api ko access kar sakta hai]
 * - req.body = { caption,image-file }
 */
postRouter.post("/", upload.single("photo"), postController.createPostController)


/**
 * GET /api/posts/ [protected]
 */
postRouter.get("/", postController.getPostController)


/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with the id. also check whether the post belongs to the user that the request come from
 */
postRouter.get("/details/:postId", postController.getPostDetailsController)


module.exports = postRouter