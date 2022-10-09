import { Router } from "express";
import { ImageUploader, Resizer } from "../../core/utils/imageResizer.js";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { MembershipController } from "../controller/userMembership.Controller.js";

const userMembershipRouter = Router();

//Membership
userMembershipRouter.get(
  "/getMembership",
  adminAuthenticate,
  MembershipController.Membership.getMembership
);

export { userMembershipRouter };
