import { ApplicationResponse } from "../../core/inc/response/ApplicationResponse.js";
import { ApplicationResult } from "../../core/result.js";
import { manageMiddleware } from "../middleware/manageProfile.Middleware.js";

export class ManageProfileController {}

ManageProfileController.Manage = {
  getUserProfile: async (req, res) => {
    manageMiddleware.Manage.fetchUser(req)
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

  deleteUserProfile: async (req, res) => {
    manageMiddleware.Manage.deleteUser(req)
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
