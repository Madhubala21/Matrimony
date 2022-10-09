import { adminDbController } from "../../core/database/Controller/adminDbController.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import * as Error from "../../core/errors/ErrorConstant.js";
// import { PayloadCompiler } from "../access/PayloadCompiler.js";

export class partnerMiddleware {}

//category
partnerMiddleware.Partner = {
  fetchPartner: async () => {
    const fetched = await adminDbController.Partner.fetchPartner();
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
