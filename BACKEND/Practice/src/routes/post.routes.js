const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");
const { getPostController } = require("../../../Day-15/src/controllers/post.controller");
const upload = multer({ storage: multer.memoryStorage() });

const postRouter = express.postRouter();


/**
 * POST /api/posts [protected]
 * - req.body = { caption,image-file }
 */
postRouter.post("/", upload.single('photo'), postController.createPostController);


/**
 * GET /api/posts/ [protected]
 */
postRouter.post("/", postController.getPostController);


/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with the id. also check whether the post belongs to the user that the request come from
 */
postRouter.post("/details/:postId", postController.getPostDetailsController);


module.exports = postRouter;