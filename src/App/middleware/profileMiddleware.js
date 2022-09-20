import * as Error from "../../core/errors/ErrorConstant.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import { PayloadCompiler } from "../../core/inc/access/PayloadCompiler.js";

export class profileMiddleware {}

//profile
profileMiddleware.profile = {
  fetchProfile: async () => {
    const fetched = await userDbController.Shop.getFaq();
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
    const fetched = await userDbController.Shop.getAllBanners();
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

  updateProfile: async () => {
    const fetched = await userDbController.Shop.getAllCategories();
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