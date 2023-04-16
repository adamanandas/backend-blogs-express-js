import express from "express";
import { body } from "express-validator";
import * as FeedController from "../controllers/Feed.mjs";

const router = express.Router();

router.get("/posts", FeedController.getPosts);
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 7 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  FeedController.createPost
);

export { router };
