import { Router } from "express";
import { ImageUploader, Resizer } from "../../core/utils/imageResizer.js";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { ActivationController } from "../controller/userAccount.Controller.js";

const activationRouter = Router();

//category
activationRouter.get(
  "/getCategory",
  adminAuthenticate,
  ActivationController.User.getUser
);

export { activationRouter };
