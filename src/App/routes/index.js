import { Router } from "express";
import { authRouter } from "./authRoutes.js";
import { profileRouter } from "./profileRoutes.js";
import { reviewRouter } from "./reviewRoutes.js";

const userRouter = Router();

//authentication
userRouter.use("/auth", authRouter);

//manageProfile
userRouter.use("/profile", profileRouter);

//manageReview
userRouter.use("/review", reviewRouter);

export { userRouter };
