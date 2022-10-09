import { ApplicationResponse } from "../../core/inc/response/ApplicationResponse.js";
import { ApplicationResult } from "../../core/result.js";
import { membershipMiddleware } from "../middleware/userMembership.Middleware.js";

export class MembershipController {}

MembershipController.Membership = {
  /**
   * @name Get All Customers
   * @param {*} token
   */

  getMembership: async (req, res) => {
    membershipMiddleware.Member.fetchMember(req)
      .then((data) => {
        const response = ApplicationResult.forCreated();
        var statuscode = 0;
        ApplicationResponse.success(
          response,
          null,
          (response) => (statuscode = response.status)
        );
        res.json({ status: statuscode, data: data });
      })
      .catch((error) => {
        ApplicationResponse.error(error, null, (response) => {
          res.status(response.status).json(response);
        });
      });
  },
};
