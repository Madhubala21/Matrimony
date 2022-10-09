import { Router } from "express";
import { ImageUploader, Resizer } from "../../core/utils/imageResizer.js";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { ReviewsController } from "../controller/viewReviews.Controller.js";

const reviewsRouter = Router();

//category
reviewsRouter.get(
  "/getCategory",
  adminAuthenticate,
  ReviewsController.Reviews.getReviews
);

export { reviewsRouter };
