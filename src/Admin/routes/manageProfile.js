import { Router } from "express";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { AdminController } from "../controller/admin.Controller.js";
import { bannerResizer } from " ../../core/utils/imageResizer.js";
import { ManageProfileController } from "../controller/manageProfile..Controller.js";
const manageProfileRouter = Router();

//dashboard
manageProfileRouter.get(
  "/dashboard",
  adminAuthenticate,
  ManageProfileController.Manage.getProfile
);

export { manageProfileRouter };
