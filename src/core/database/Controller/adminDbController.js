import express from "express";
import { connection } from "../connection.js";
import * as Models from "../models/index.js";
import require from "requirejs";
const { Op, Sequelize, where } = require("sequelize");
import * as Error from "../../errors/ErrorConstant.js";

export class adminDbController {}
adminDbController.scope = "defaultScope";
adminDbController.Models = Models;
adminDbController.connection = connection;
adminDbController.defaults = {};

adminDbController.Appconfigs = async () => {
  try {
    return await adminDbController.Models.config.findOne({
      raw: true,
    });
  } catch (error) {}
};

adminDbController.Auth = {
  checkemailExists: async (data) => {
    try {
      return await adminDbController.Models.admin.findOne({
        where: {
          email: data.email,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
  checkAdminExistsLogin: async (data) => {
    console.log(data);
    try {
      return await adminDbController.Models.admin.findOne({
        where: {
          // [Op.or]: {
          email: data.email || null,
          // password: data.password,
          // },
        },
        raw: true,
      });
    } catch (error) {
      console.log(error);
      throw Error.SomethingWentWrong();
    }
  },
  checkAdminExistsRegister: async (data) => {
    try {
      return await adminDbController.Models.admin.findOne({
        where: {
          [Op.or]: {
            email: data.email || null,
            phone: data.phone || null,
          },
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
  checkUserIdExists: async (data) => {
    try {
      return await adminDbController.Models.admin.findOne({
        where: {
          id: data.userId,
          type: "ROOT",
          status: "active",
        },
        attributes: ["id", "username"],
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
  createUid: async (data) => {
    const code = Math.floor(100000 + Math.random() * 900000);
    try {
      const updated_data = await adminDbController.Models.customer.update(
        { code: code },
        { where: { id: data.id } },
        { plain: true, returning: true }
      );
      if (updated_data[0] == 1) {
        return adminDbController.Models.customer.findOne({
          where: { email: data.email },
          attributes: ["userName", "email", "code"],
          raw: true,
        });
      } else {
        return null;
      }
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
  verifyOtp: async (data) => {
    try {
      return await adminDbController.Models.customer.findOne({
        where: { email: data.email, code: data.code },
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
  updatePassword: async (data) => {
    try {
      return await adminDbController.Models.customer.update(
        {
          password: data.password,
          code: 0,
        },
        {
          where: { email: data.email },
        }
      );
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
  session: {
    createSession: async (token, device, id) => {
      try {
        return await adminDbController.Models.adminAuthentication.create({
          uid: id,
          token: token,
          latLong: device.latLong,
          ipv4: device.ip || device.ipv,
          userAgent: device.userAgent,
        });
      } catch (error) {
        throw Error.SomethingWentWrong("Unable to Crate Session");
      }
    },
    findSession: async (token) => {
      try {
        return await adminDbController.Models.adminAuthentication.findOne({
          where: {
            token: token,
          },
          raw: true,
        });
      } catch (error) {
        throw Error.SomethingWentWrong();
      }
    },
    findMySession: async (data) => {
      try {
        return await adminDbController.Models.adminAuthentication.findAll({
          where: {
            uid: data.id,
            status: {
              [Op.ne]: "terminate",
            },
          },
          order: [["id", "DESC"]],
          raw: true,
          attributes: {
            exclude: ["token", "uid", "updatedAt"],
          },
        });
      } catch (error) {
        throw Error.SomethingWentWrong();
      }
    },
    findSessionId: async (data) => {
      try {
        return await adminDbController.Models.adminAuthentication.findOne({
          where: {
            uid: data.id,
          },
          order: [["id", "DESC"]],
        });
      } catch (error) {
        throw Error.SomethingWentWrong();
      }
    },
    findSessionById: async (data) => {
      try {
        return await adminDbController.Models.adminAuthentication.findOne({
          where: {
            id: data.id,
          },
          order: [["id", "DESC"]],
        });
      } catch (error) {
        throw Error.SomethingWentWrong();
      }
    },
    destroySession: async (token) => {
      try {
        return await adminDbController.Models.adminAuthentication.update(
          {
            status: "inactive",
          },
          {
            where: {
              token: token,
            },
          }
        );
      } catch (error) {
        throw Error.SomethingWentWrong();
      }
    },
    deleteSession: async (data) => {
      try {
        return await adminDbController.Models.adminAuthentication.update(
          {
            status: "terminate",
          },
          {
            where: {
              id: data.id,
            },
          }
        );
      } catch (error) {
        throw Error.SomethingWentWrong();
      }
    },
  },
};

adminDbController.Admin = {
  createAdmin: async (data) => {
    console.log(data);
    try {
      return await adminDbController.Models.admin.create(
        {
          username: data.username,
          email: data.email,
          phone: data.phone,
          password: data.password,
          status: "inactive",
          type: "USER",
        },
        { raw: true }
      );
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Profile = {
  fetchProfile: async () => {
    try {
      return await adminDbController.Models.banner.findAll({
        order: [["bannerType", "ASC"]],
        raw: true,
        attributes: ["id", "bannerImage", "bannerType", "status"],
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Account = {
  getAccount: async () => {
    // const limit = Number(16);
    try {
      return await adminDbController.Models.customer.findAll({
        attributes: {
          exclude: [
            "alaisName",
            "dob",
            "code",
            "password",
            "fcmToken",
            "createdAt",
            "updatedAt",
            "expiry",
          ],
        },
        order: [["userName", "ASC"]],
        raw: true,
        // limit: 16,
        // offset: 0 + (Number(data.pagination) - 1) * limit
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Photo = {
  getPhoto: async () => {
    // const limit = Number(16);
    try {
      return await adminDbController.Models.customer.findAll({
        attributes: {
          exclude: [
            "alaisName",
            "dob",
            "code",
            "password",
            "fcmToken",
            "createdAt",
            "updatedAt",
            "expiry",
          ],
        },
        order: [["userName", "ASC"]],
        raw: true,
        // limit: 16,
        // offset: 0 + (Number(data.pagination) - 1) * limit
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Manage = {
  fetchManage: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Document = {
  fetchDocument: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Member = {
  getMember: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Validity = {
  getValidity: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Review = {
  fetchReview: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Story = {
  fetchStory: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};

adminDbController.Partner = {
  fetchPartner: async (data) => {
    try {
      return await adminDbController.Models.category.findOne({
        where: {
          categoryName: data.categoryName,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.SomethingWentWrong();
    }
  },
};
