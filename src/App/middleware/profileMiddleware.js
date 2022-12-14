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
      throw Error.SomethingWentWrong("User Not Found!");
    }
  },

  createProfile: async ({ body, image }) => {
    // let body = data.body;
    console.log(body);
    const passwordSecret = configs.passwordSecret;
    console.log(passwordSecret);
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

  //add user details

  userDetails: async (data) => {
    let body = data.body;
    // console.log(body);
    const checkUser = await userDbController.Profile.checkUserExists(
      data.token
    );
    if (
      checkUser != null &&
      checkUser != undefined &&
      Object.keys(checkUser).length != 0
    ) {
      const checkUserDetails =
        await userDbController.Profile.checkUserDetailsExists(data.token);
      console.log(checkUserDetails);
      if (
        checkUserDetails != null &&
        checkUserDetails != undefined &&
        Object.keys(checkUserDetails).length != 0
      ) {
        return "User details already exists";
      } else {
        const validated = await PayloadCompiler.compile(
          body,
          "userDetailsCreate"
        );
        const fetched = await userDbController.Profile.userDetails(
          data.body,
          data.token
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
    } else {
      return "User not found";
    }
  },

  familyDetails: async (data) => {
    let body = data.body;
    // console.log(body);
    const checkUser = await userDbController.Profile.checkUserExists(
      data.token
    );
    if (
      checkUser != null &&
      checkUser != undefined &&
      Object.keys(checkUser).length != 0
    ) {
      const checkUserDetails =
        await userDbController.Profile.checkFamilyDetailsExists(data.token);
      console.log(checkUserDetails);
      if (
        checkUserDetails != null &&
        checkUserDetails != undefined &&
        Object.keys(checkUserDetails).length != 0
      ) {
        return "User details already exists";
      } else {
        const validated = await PayloadCompiler.compile(body, "myfamilyCreate");
        const fetched = await userDbController.Profile.familyDetails(
          data.body,
          data.token
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
    } else {
      return "User not found";
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
      if (checkUser.userName == body.username) {
        return "Already updated";
      } else {
        const fetched = await userDbController.Profile.updateProfile(
          body,
          token
        );
        return fetched;
      }
    } else {
      return "User not found";
    }
  },
};
