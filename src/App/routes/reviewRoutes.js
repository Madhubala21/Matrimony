import { Router } from "express";
import { UserAuthenticate } from "../controller/authController.js";
import { ReviewController } from "../controller/reviewController.js";

const reviewRouter = Router();

//check if order 0
reviewRouter.get(
  "/MyReview",
  UserAuthenticate,
  ReviewController.Review.fetchMyReviews
);

reviewRouter.post(
  "/addReview",
  UserAuthenticate,
  ReviewController.Review.addReview
);

reviewRouter.post(
  "/removeReview",
  UserAuthenticate,
  ReviewController.Review.removeReview
);

export { reviewRouter };
