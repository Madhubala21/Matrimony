import { Router } from "express";
import { adminAuthenticate } from "../controller/auth.Controller.js";
// import { AdminController } from "../controller/admin.Controller.js";
// import { bannerResizer } from " ../../core/utils/imageResizer.js";
import { ManageProfileController } from "../controller/manageProfile..Controller.js";

const manageUserRouter = Router();

manageUserRouter.post(
  "/viewUser",
  adminAuthenticate,
  ManageProfileController.Manage.getUserProfile
);

manageUserRouter.post(
  "/deleteUser",
  adminAuthenticate,
  ManageProfileController.Manage.deleteUserProfile
);

export { manageUserRouter };
