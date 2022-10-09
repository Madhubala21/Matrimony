import { ApplicationResponse } from "../../core/inc/response/ApplicationResponse.js";
import { ApplicationResult } from "../../core/result.js";
import { storiesMiddleware } from "../middleware/success.Middleware.js";

export class StoriesController {}

StoriesController.Story = {
  /**
   * @name Get All Customers
   * @param {*} token
   */

  getStory: async (req, res) => {
    storiesMiddleware.Story.fetchStory(req)
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
