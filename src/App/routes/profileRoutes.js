import { Router } from "express";
import { Resizer } from "../../core/utils/imageResizer.js";
import { UserAuthenticate } from "../controller/authController.js";
import { ProfileController } from "../controller/profileController.js";

const profileRouter = Router();

//view user profile
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

//User details create
profileRouter.post(
  "/userDetails",
  UserAuthenticate,
  ProfileController.profile.userDetails
);
// profileRouter.post(
//   "/updateProfile",
//   UserAuthenticate,
//   ProfileController.profile.updateProfile
// );
// profileRouter.post(
//   "/updateProfile",
//   UserAuthenticate,
//   ProfileController.profile.updateProfile
// );

//update user profile
profileRouter.post(
  "/updateProfile",
  UserAuthenticate,
  ProfileController.profile.updateProfile
);

export { profileRouter };
