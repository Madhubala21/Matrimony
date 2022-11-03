import { adminDbController } from "../../core/database/Controller/adminDbController.js";
// import { userDbController } from "../../core/database/Controller/userDbController.js";
import * as Error from "../../core/errors/ErrorConstant.js";
// import { PayloadCompiler } from "../access/PayloadCompiler.js";

export class manageMiddleware {}

//category
manageMiddleware.Manage = {
  fetchUser: async (data) => {
    let body = data.body;
    const fetched = await adminDbController.Manage.fetchUser1(body);
    if (
      fetched != null &&
      fetched != undefined &&
      Object.keys(fetched).length != 0
    ) {
      return fetched;
    } else {
      return "User Not Found";
    }
  },

  deleteUser: async (data) => {
    let body = data.body;
    console.log(body);
    const find = await adminDbController.Manage.fetchUser(body);
    console.log("madhu", find);
    if (find != null && find != undefined && Object.keys(find).length != 0) {
      const fetched = await adminDbController.Manage.deleteUser(body);
      return fetched;
    } else {
      return "User not found";
    }
  },
};
