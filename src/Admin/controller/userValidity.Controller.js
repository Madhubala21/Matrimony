import { ApplicationResponse } from "../../core/inc/response/ApplicationResponse.js";
import { ApplicationResult } from "../../core/result.js";
import { validityMiddleware } from "../middleware/userValidity.Middleware.js";

export class ValidityController {}

ValidityController.Validity = {
  /**
   * @name Get All Customers
   * @param {*} token
   */

  getValidity: async (req, res) => {
    validityMiddleware.Validity.fetchValidity(req)
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
