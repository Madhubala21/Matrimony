import require from "requirejs";
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");
import fs from "fs";
import shelljs from "shelljs";
import * as Error from "../errors/ErrorConstant.js";
const __dirname = path.resolve();
import dotenv from "dotenv";
dotenv.config();

const fileStorageEngine = multer.diskStorage({
  //original resource storage
  destination: (req, file, cb) => {
    if (!fs.existsSync(__dirname + "/src/core/images/original")) {
      shelljs.mkdir("-p", __dirname + "/src/core/images/original");
    }
    cb(null, "./src/core/images/original"); //directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)?.toLowerCase();
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: {
    fileSize: 10 * 1024 * 1024, //10mb
  },
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
});
function checkFileType(file, callback) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(
    path.extname(file.originalname)?.toLowerCase()
  );
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype || extname) {
    return callback(null, true);
  } else {
    callback("Check your File Type ");
  }
}

export const Resizer = async (req, res, next) => {
  upload.array("image")(
    req,
    res,
    async function (
      error //upload.array('image'), (req, res, next)=>
    ) {
      if (error) {
        return res.status(400).json({
          Error: error,
        });
      } else {
        var image_path = [];
        req.files.map(async (v) => {
          req.image = v?.path ?? null;
          if (req.image) {
            const ext = path.extname(v.originalname)?.toLowerCase();

            //compressed file name
            let imagename = "ECOM" + Date.now() + ext;
            image_path.push(process.env.baseUrl + "images/" + imagename);
            //where to store the compressed file
            let compressedImage = path.join(
              __dirname,
              "/src/core/images/",
              imagename
            );
            await sharp(req.image)
              .resize(500)
              .png({
                quality: 50,
                chromaSubsampling: "4:4:4",
              })
              .toFile(compressedImage);
          }
        });
        req.image = image_path;
      }
      next();
    }
  );
};
export const bannerResizer = async (req, res, next) => {
  upload.single("image")(req, res, async function (error) {
    if (error) {
      return res.status(400).json({
        Error: error,
      });
    } else {
      req.image = req?.file?.path || null;
      if (req.image) {
        const ext = path.extname(req?.file?.originalname)?.toLowerCase();
        let imagename = process.env.APP_NAME + Date.now() + ext;
        let compressedImage = path.join(
          __dirname,
          "/src/core/images/",
          imagename
        );
        await sharp(req.image)
          .resize(1500)
          .png({
            quality: 80,
            chromaSubsampling: "4:4:4",
          })
          .toFile(compressedImage);
        const fileCreated = fs.existsSync(
          path.join(__dirname, "/src/core/images/", imagename)
        );
        if (fileCreated) {
          req.image = "/images/" + imagename;
        } else {
          return "Failed to upload the image";
        }
      }
    }
    next();
  });
};

export const ImageUploader = async (req, res) => {
  upload.single("variantImage")(req, res, async function (error) {
    if (error) {
      throw Error.SomethingWentWrong();
    } else {
      req.image = req?.file?.path || null;
      if (req.image) {
        const ext = path.extname(req?.file?.originalname)?.toLowerCase();
        let imagename = process.env.APP_NAME + Date.now() + ext;
        let compressedImage = path.join(
          __dirname,
          "/src/core/images/",
          imagename
        );
        await sharp(req.image)
          .resize(500)
          .png({
            quality: 80,
            chromaSubsampling: "4:4:4",
          })
          .toFile(compressedImage);
        const fileCreated = fs.existsSync(
          path.join(__dirname, "/src/core/images/", imagename)
        );
        if (fileCreated) {
          var imagePath = "/images/" + imagename;
          if (imagePath != null && imagePath != undefined) {
            res.json({ status: 200, data: imagePath });
          }
        } else {
          throw Error.SomethingWentWrong("Failed to upload the image");
        }
      }
    }
  });
};
