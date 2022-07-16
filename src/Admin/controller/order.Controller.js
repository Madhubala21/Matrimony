import { ApplicationResponse } from '../../core/inc/response/ApplicationResponse.js'
import { ApplicationResult } from '../../core/result.js'
import { orderMiddleware } from '../middleware/order.Middleware.js';

export class OrderController { }


OrderController.Order = {

  /**
  * @name Get All Customers
  * @param {*} token
  */


    getOrders: async (req, res) => {
        orderMiddleware.Order.fetchOrders(req)
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
    getSingleOrder: async (req, res) => {
        orderMiddleware.Order.fetchSingleOrders(req)
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
    updateOrderStatus: async (req, res) => {
        orderMiddleware.Order.changeOrderStatus(req)
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


