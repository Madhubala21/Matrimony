import { ApplicationResponse } from "../../core/inc/response/ApplicationResponse.js";
import { ApplicationResult } from "../../core/result.js";
import { adminMiddleware } from "../middleware/admin.Middleware.js";

export class AdminController {}

AdminController.Customer = {
  getAnalytics: async (req, res) => {
    adminMiddleware.Customer.fetchAnalytics(req)
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
  /**
   * @name Get All Customers
   * @param {*} token
   */

  getCustomers: async (req, res) => {
    adminMiddleware.Customer.getallCustomer(req)
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

  /**
   * @name Get Single  Customer's Details
   * @param {*} token
   */

  getSingleCustomer: async (req, res) => {
    adminMiddleware.Customer.fetchSingleCustomer(req)
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

  /**
   * @name update Customer
   * @param {*} body
   */

  updateCustomer: async (req, res) => {
    adminMiddleware.Customer.updateSingleCustomer(req)
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

AdminController.Banners = {
  getBanners: async (req, res) => {
    adminMiddleware.Banners.fetchBanners(req)
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
  addBanners: async (req, res) => {
    adminMiddleware.Banners.createBanners(req)
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
  updateBanners: async (req, res) => {
    adminMiddleware.Banners.putBanners(req)
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

AdminController.Shop = {
  getTax: async (req, res) => {
    adminMiddleware.Shop.fetchTax(req)
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
  addTax: async (req, res) => {
    adminMiddleware.Shop.createTax(req)
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
  removeTax: async (req, res) => {
    adminMiddleware.Shop.deleteTax(req)
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
  getFaq: async (req, res) => {
    adminMiddleware.Shop.fetchFaq(req)
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
  addFaq: async (req, res) => {
    adminMiddleware.Shop.createFaq(req)
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
  removeFaq: async (req, res) => {
    adminMiddleware.Shop.deleteFaq(req)
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

// AdminController.Orders = {
//     getallOrders: async (req, res) => {
//         AdminControl.Orders.fetchallOrders(req)
//             .then((data) => {
//                 const response = ApplicationResult.forCreated();
//                 var statuscode = 0;
//                 ApplicationResponse.success(
//                     response,
//                     null,
//                     (response) => (statuscode = response.status)
//                 );
//                 res.json({ status: statuscode, data: data });
//             })
//             .catch((error) => {
//                 ApplicationResponse.error(error, null, (response) => {
//                     res.status(response.status).json(response);
//                 });
//             });
//     },
//     deliveryLocation: async (req, res) => {
//         AdminControl.Orders.fetchlocation(req)
//             .then((data) => {
//                 const response = ApplicationResult.forCreated();
//                 var statuscode = 0;
//                 ApplicationResponse.success(
//                     response,
//                     null,
//                     (response) => (statuscode = response.status)
//                 );
//                 res.json({ status: statuscode, data: data });
//             })
//             .catch((error) => {
//                 ApplicationResponse.error(error, null, (response) => {
//                     res.status(response.status).json(response);
//                 });
//             });
//     },
//     updateOrders: async (req, res) => {
//         AdminControl.Orders.updateOrderStatus(req)
//             .then((data) => {
//                 const response = ApplicationResult.forCreated();
//                 var statuscode = 0;
//                 ApplicationResponse.success(
//                     response,
//                     null,
//                     (response) => (statuscode = response.status)
//                 );
//                 res.json({ status: statuscode, data: data });
//             })
//             .catch((error) => {
//                 ApplicationResponse.error(error, null, (response) => {
//                     res.status(response.status).json(response);
//                 });
//             });
//     },
// };
