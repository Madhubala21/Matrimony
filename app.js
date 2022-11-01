import express from "express";
import cors from "cors";
import chalk from "chalk";
import path from "path";
const __dirname = path.resolve();
import helmet from "helmet";
import * as config from "./config/config.js";
import { setup } from "./src/core/setup.js";
import { Logger } from "./src/core/lib/logger.js";
import dotenv from "dotenv";
dotenv.config();
//require routers
// import { userRouter } from "./src/App/routes/index.js";
import { getStarted } from "./src/App/controller/authController.js";
import { adminRouter } from "./src/Admin/routes/index.Routes.js";

const app = express();

//Enable cross origin policy
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    methods: "GET,POST,PUT",
    preflightContinue: false,
    credentials: true,
  })
);

app.set("view engine", "ejs");
app.set("views", "./src/core/views/ui/");
app.use(express.static("pages"));
app.use("/images", express.static(path.join(__dirname, "./src/core/images")));

//Parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//security
app.use(helmet());

app.use("/admin", adminRouter);
//app.use("/user", userRouter);

//mailer
app.get("/getStarted", getStarted);

//checkStatus
app.use("/status", async (req, res) => {
  res.json({ data: `${process.env.APP_NAME} API is Now Live` });
});

//404 handlers
app.get("/", async (req, res) => {
  res.status(404).render("404", {
    message: "Unable to find the requested resource",
    name: process.env.APP_NAME,
  });
});

app.use(function (req, res, next) {
  res.status(404).render("404", {
    message: "Unable to find the requested resource",
    name: process.env.APP_NAME,
  });
});

const AppConfig =
  config.mode === "production" ? config.production : config.development;
setup(AppConfig)
  .then((config) => {
    app.listen(config.server.port);
    Logger.info(
      chalk.green(
        `${config.database.appName}  API Listening ✔️ ✔️ ✔️ ${config.server.port} `
      )
    );
  })
  .catch((error) => {
    Logger.error(JSON.stringify(error));
    process.abort();
  });
