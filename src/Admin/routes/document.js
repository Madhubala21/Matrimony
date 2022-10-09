import { Router } from "express";
import { ImageUploader, Resizer } from "../../core/utils/imageResizer.js";
import { adminAuthenticate } from "../controller/auth.Controller.js";
import { DocumentController } from "../controller/document.Controller.js";

const documentRouter = Router();

//category
documentRouter.get(
  "/getCategory",
  adminAuthenticate,
  DocumentController.Document.getDocument
);

export { documentRouter };
