import { Router } from "express";
import { ImageUploader, Resizer } from "../../core/utils/imageResizer.js";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { StoriesController } from "../controller/success.Controller.js";

const storiesRouter = Router();

//category
storiesRouter.get(
  "/getCategory",
  adminAuthenticate,
  StoriesController.Story.getStory
);

export { storiesRouter };
