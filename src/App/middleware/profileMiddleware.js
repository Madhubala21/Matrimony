import * as Error from "../../core/errors/ErrorConstant.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import { PayloadCompiler } from "../../core/inc/access/PayloadCompiler.js";
import { Configurations } from "../../core/database/initialize.js";
import require from "requirejs";
var CryptoJS = require("crypto-js");
export class profileMiddleware {}

//profile
profileMiddleware.profile = {
  fetchProfile: async (data) => {
    const fetched = await userDbController.Profile.fetchProfile(data.token);
    if (
      fetched != null &&
      fetched != undefined &&
      Object.keys(fetched).length != 0
    ) {
      return fetched;
    } else {
      throw Error.SomethingWentWrong("No FAQ's Found!");
    }
  },

  createProfile: async ({ body, image }) => {
    // let body = data.body;
    console.log(body);
    console.log("image", image);
    const passwordSecret = configs.passwordSecret;
    const checkUser = await userDbController.Profile.checkUser(body);
    if (
      checkUser != null &&
      checkUser != undefined &&
      Object.keys(checkUser).length != 0
    ) {
      return "User already exists";
    } else {
      body.password = CryptoJS.AES.encrypt(
        body.password,
        passwordSecret
      ).toString();

      const validated = await PayloadCompiler.compile(body, "UserCreate");
      console.log(validated.data);
      const fetched = await userDbController.Profile.addProfile(
        validated.data,
        image
      );
      if (
        fetched != null &&
        fetched != undefined &&
        Object.keys(fetched).length != 0
      ) {
        return "Added successfully";
      } else {
        return "Some problem ";
      }
    }
  },

  updateProfile: async (data) => {
    let body = data.body;
    let token = data.token;
    const checkUser = await userDbController.Profile.checkUserExists(token);
    if (
      checkUser != null &&
      checkUser != undefined &&
      Object.keys(checkUser).length != 0
    ) {
      const fetched = await userDbController.Profile.updateProfile(body, token);
      return fetched;
    } else {
      return "User not found";
    }
  },
};
