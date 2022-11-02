import { Router } from "express";
import {
  adminLogin,
  adminRegister,
  adminLogout,
  adminSessions,
  adminTokenAuthenticate,
  adminAuthenticate,
} from "../controller/auth.Controller.js";
import require from "requirejs";
const rateLimit = require("express-rate-limit");

const msg = {
  message: "Oops...! Limit Exceeded, Kindly Try Again after 8hrs.",
};
const apiLimiter = rateLimit({
  windowMs: 480 * 60 * 1000, // 60*8 hrs = 480 minutes
  max: 50,
  message: msg,
  skipFailedRequests: true,
});

const authRouter = Router();

//logins
authRouter.post("/login", apiLimiter, adminLogin);
authRouter.get("/session", adminAuthenticate, adminSessions.getSession);
authRouter.post(
  "/deleteSession",
  adminAuthenticate,
  adminSessions.destroySession
);

//root user
authRouter.post("/register", adminRegister);

//logout
authRouter.post("/logout", adminLogout);

//validate request for react App
authRouter.post("/", adminTokenAuthenticate);

export { authRouter };
