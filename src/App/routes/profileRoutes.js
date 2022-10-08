import { Router } from "express";
import { UserAuthenticate } from "../controller/authController.js";
import { ProfileController } from "../controller/profileController.js";

const profileRouter = Router();

profileRouter.get("/viewProfile", ProfileController.profile.viewProfile);

profileRouter.post("/addProfile", ProfileController.profile.addProfile);

profileRouter.post("/updateProfile", ProfileController.profile.updateProfile);

export { profileRouter };
