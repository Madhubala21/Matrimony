import { adminDbController } from "../../core/database/Controller/adminDbController.js";
// import { userDbController } from "../../core/database/Controller/userDbController.js";
import * as Error from "../../core/errors/ErrorConstant.js";
// import { PayloadCompiler } from "../access/PayloadCompiler.js";

export class profileMiddleware {}

//category
profileMiddleware.Profile = {
  fetchProfile: async (data) => {
    const fetched = await adminDbController.Profile.fetchProfile(data.token);
    if (
      fetched != null &&
      fetched != undefined &&
      Object.keys(fetched).length != 0
    ) {
      return fetched;
    } else {
      return "Admin Not Found";
    }
  },
};
