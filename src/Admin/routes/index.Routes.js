import { Router } from "express";
import { authRouter } from "./auth.Routes.js";
// import { documentRouter } from "./document.js";
// import { manageProfileRouter } from "./manageProfile.js";
// import { partnerDetailsRouter } from "./partner.js";
// import { storiesRouter } from "./success.js";
// import { activationRouter } from "./userAccount.js";
// import { userMembershipRouter } from "./userMembership.js";
// import { userPhotographRouter } from "./userPhotograph.js";
// import { userValidityRouter } from "./userValidity.js";
// import { profileRouter } from "./viewProfile.js";
// import { reviewsRouter } from "./viewReviews.js";

const adminRouter = Router();

adminRouter.use("/auth", authRouter);

// adminRouter.use("/viewUserProfile", profileRouter);

// adminRouter.use("/userActivation", activationRouter);

// adminRouter.use("/manageProfile", manageProfileRouter);

// adminRouter.use("/userPhotographManage", userPhotographRouter);

// adminRouter.use("/documentManagement", documentRouter);

// adminRouter.use("/userMembershipManagement", userMembershipRouter);

// adminRouter.use("/userValidityRenewal", userValidityRouter);

// adminRouter.use("/viewReviews", reviewsRouter);

// adminRouter.use("/addSuccessStories", storiesRouter);

// adminRouter.use("/searchPartnerDetails", partnerDetailsRouter);

export { adminRouter };
