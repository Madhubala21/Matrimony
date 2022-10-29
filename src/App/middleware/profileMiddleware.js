import * as Error from "../../core/errors/ErrorConstant.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import { PayloadCompiler } from "../../core/inc/access/PayloadCompiler.js";

export class profileMiddleware {}

//profile
profileMiddleware.profile = {
  fetchProfile: async () => {
    const fetched = await userDbController.Profile.fetchProfile();
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

  createProfile: async () => {
    const fetched = await userDbController.Profile.addProfile();
    if (
      fetched != null &&
      fetched != undefined &&
      Object.keys(fetched).length != 0
    ) {
      return fetched;
    } else {
      return "No Banners Found";
    }
  },

  updateProfile: async (data, token) => {
    const fetched = await userDbController.Profile.updateProfile(data, token);
    if (
      fetched != null &&
      fetched != undefined &&
      Object.keys(fetched).length != 0
    ) {
      return fetched;
    } else {
      return "No Categories Found";
    }
  },
};
