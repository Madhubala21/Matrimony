import { Router } from "express";
import { Resizer } from "../../core/utils/imageResizer.js";
import { UserAuthenticate } from "../controller/authController.js";
import { ProfileController } from "../controller/profileController.js";

const profileRouter = Router();

profileRouter.get(
  "/viewProfile",
  UserAuthenticate,
  ProfileController.profile.viewProfile
);

profileRouter.post(
  "/addProfile",
  Resizer,
  ProfileController.profile.addProfile
);

profileRouter.post(
  "/updateProfile",
  UserAuthenticate,
  ProfileController.profile.updateProfile
);

export { profileRouter };
