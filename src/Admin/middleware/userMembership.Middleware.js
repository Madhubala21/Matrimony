import { adminDbController } from "../../core/database/Controller/adminDbController.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import * as Error from "../../core/errors/ErrorConstant.js";
import { isDataValid, isUpdated } from "../../core/utils/functions.js";
// import { PayloadCompiler } from "../access/PayloadCompiler.js";

export class membershipMiddleware {}

membershipMiddleware.Member = {
  fetchMember: async ({ query }) => {
    const fetched = await adminDbController.Member.getMember(query);
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
