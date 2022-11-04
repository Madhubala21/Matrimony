import { Router } from "express";
import { authRouter } from "./auth.Routes.js";
import { dashboardRouter } from "./dashboard.js";
// import { documentRouter } from "./document.js";
import { manageUserRouter } from "./manageProfile.js";
// import { partnerDetailsRouter } from "./partner.js";
// import { storiesRouter } from "./success.js";
// import { activationRouter } from "./userAccount.js";
// import { userMembershipRouter } from "./userMembership.js";
// import { userPhotographRouter } from "./userPhotograph.js";
// import { userValidityRouter } from "./userValidity.js";
import { profileRouter } from "./viewProfile.js";

const adminRouter = Router();

adminRouter.use("/auth", authRouter);

adminRouter.use("/Profile", profileRouter);

adminRouter.use("/adminDashboard", dashboardRouter);

// adminRouter.use("/userActivation", activationRouter);

adminRouter.use("/manageuserProfile", manageUserRouter);

// adminRouter.use("/userPhotographManage", userPhotographRouter);

// adminRouter.use("/documentManagement", documentRouter);

// adminRouter.use("/userMembershipManagement", userMembershipRouter);

// adminRouter.use("/userValidityRenewal", userValidityRouter);

// adminRouter.use("/viewReviews", reviewsRouter);

// adminRouter.use("/addSuccessStories", storiesRouter);

// adminRouter.use("/searchPartnerDetails", partnerDetailsRouter);

export { adminRouter };
