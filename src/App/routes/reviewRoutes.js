import { Router } from "express";
import { UserAuthenticate } from "../controller/authController.js";
import { ReviewController } from "../controller/reviewController.js";

const reviewRouter = Router();

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