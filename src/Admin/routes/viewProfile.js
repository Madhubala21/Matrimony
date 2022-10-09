import { Router } from "express";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { ProfileController } from "../controller/viewProfile.Controller.js";

const profileRouter = Router();

//orders
profileRouter.get(
  "/viewProfile",
  adminAuthenticate,
  ProfileController.Profile.viewProfile
);

profileRouter.get(
  "/createProfile",
  adminAuthenticate,
  ProfileController.Profile.addProfile
);

export { profileRouter };
