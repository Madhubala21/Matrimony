import { adminDbController } from "../../core/database/Controller/adminDbController.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import * as Error from "../../core/errors/ErrorConstant.js";
// import { PayloadCompiler } from "../access/PayloadCompiler.js";

export class manageMiddleware {}

//category
manageMiddleware.Manage = {
  fetchManage: async () => {
    const fetched = await adminDbController.Manage.fetchManage();
    if (
      fetched != null &&
      fetched != undefined &&
      Object.keys(fetched).length != 0
    ) {
      return fetched;
    } else {
      return "No Orders Found";
    }
  },
};
