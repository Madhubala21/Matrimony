import express from "express";
import { connection } from "../connection.js";
import * as Models from "../models/index.js";
import require from "requirejs";
import * as Error from "../../errors/ErrorConstant.js";
// import { defaultAppStore } from "firebase-admin/lib/app/lifecycle.js";
const { Op, Sequelize } = require("sequelize");
export class userDbController {}
userDbController.scope = "defaultScope";
userDbController.Models = Models;
userDbController.connection = connection;
userDbController.defaults = {};

//user checkexists
userDbController.Auth = {
  checkemailExists: async (data) => {
    try {
      return await userDbController.Models.user.findOne({
        where: {
          email: data.email,
        },
        raw: true,
      });
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },
  checkUserExists: async (data) => {
    try {
      return await userDbController.Models.user.findOne({
        where: {
          [Op.or]: {
            email: data.email,
            phone: data.phone,
          },
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  createUid: async (data) => {
    try {
      const updated_data = await userDbController.Models.user.update(
        { code: data.code, expiry: data.expiry },
        { where: { id: data.id } },
        { plain: true, returning: true }
      );
      if (updated_data[0] == 1) {
        return userDbController.Models.customer.findOne({
          where: { email: data.email },
          attributes: ["userName", "email", "code"],
          raw: true,
        });
      } else {
        return null;
      }
    } catch (error) {
      throw Error.InternalError();
    }
  },
  verifyOtp: async (data) => {
    try {
      return await userDbController.Models.user.findOne({
        where: { email: data.email, code: data.code },
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  verifyUser: async (data) => {
    try {
      return await userDbController.Models.user.update(
        { status: "active", isMailVerified: "yes" },
        {
          where: { id: data.id },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  updatePassword: async (data) => {
    try {
      return await userDbController.Models.user.update(
        {
          password: data.password,
          code: 0,
          expiry: 0,
        },
        {
          where: { email: data.email },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  session: {
    createSession: async (token, device) => {
      try {
        return await userDbController.Models.userAuthentication.create({
          token: token,
          ipv4: device.ip || device.ipv,
          userAgent: device.userAgent,
        });
      } catch (error) {
        throw Error.InternalError();
      }
    },
    findSession: async (token) => {
      try {
        return await userDbController.Models.userAuthentication.findOne({
          where: {
            token: token,
          },
        });
      } catch (error) {
        return null;
      }
    },
    destroySession: async (token) => {
      try {
        return await userDbController.Models.userAuthentication.destroy({
          where: {
            token: token,
          },
        });
      } catch (error) {
        throw Error.InternalError();
      }
    },
  },
};

userDbController.Customer = {
  createCustomer: async (data) => {
    try {
      return await userDbController.Models.user.create({
        userName: data.userName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        dob: data.dob,
        gender: data.gender,
        acceptTerms: data.acceptTerms,
        status: "inactive",
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  //get user by id
  checkUserExists: async (data) => {
    try {
      return await userDbController.Models.user.findOne({
        where: {
          id: data.userId,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchCustomer: async (data) => {
    try {
      return await userDbController.Models.customer.findOne({
        where: {
          id: data.customerId,
        },
        attributes: {
          exclude: [
            "code",
            "password",
            "fcmToken",
            "createdAt",
            "updatedAt",
            "expiry",
            "status",
          ],
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchCustomerDetails: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.findOne({
        where: {
          id: data.AddressId || 1,
          id: data.customerId,
        },
        raw: true,
        nest: true,
        include: {
          model: Models.customer,
          attributes: {
            exclude: [
              "code",
              "password",
              "fcmToken",
              "status",
              "createdAt",
              "updatedAt",
            ],
          },
          where: {
            status: "active",
          },
        },
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  updateCustomers: async (data, tokenId, image) => {
    try {
      return await userDbController.Models.customer.update(
        {
          profilePic: image,
          userName: data.username,
          alaisName: data.alaisName,
          dob: data.dob,
          gender: data.sex,
        },
        {
          where: {
            id: tokenId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
};

userDbController.Address = {
  fetchAddress: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.findAll({
        where: {
          customerId: data.customerId,
          status: "active",
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "status", "customerId"],
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchAddressbyId: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.findOne({
        where: {
          id: data.shippingAddress,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  checkAddressExists: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.findOne({
        where: {
          customerId: data.customerId,
          state: data.state,
          city: data.city,
          street: data.street,
          landmark: data.landmark,
          zipcode: data.zipcode,
          addressType: data.addressType,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  checkAddressExistsExcept: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.findOne({
        where: {
          id: { [Op.ne]: data.addressId },
          customerId: data.customerId,
          state: data.state,
          city: data.city,
          street: data.street,
          landmark: data.landmark,
          zipcode: data.zipcode,
          primary: data.primary,
          district: data.district,
          addressType: data.addressType,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  checkPrimaryAddressExistsExcept: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.findOne({
        where: {
          id: { [Op.ne]: data.addressId },
          customerId: data.customerId,
          primary: "yes",
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  addAddress: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.create({
        customerId: data.customerId,
        state: data.state,
        district: data.district,
        city: data.city,
        street: data.street,
        landmark: data.landmark || null,
        zipcode: data.zipcode,
        addressType: data.addressType,
        primary: data.primary,
        status: "active",
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  updateAddress: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.update(
        {
          customerId: data.customerId,
          status: "inactive",
        },
        {
          where: {
            id: data.addressId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  updateAddressbyId: async (data) => {
    try {
      return await userDbController.Models.member.update(
        {
          state: data.state,
          district: data.district,
          city: data.city,
          street: data.street,
          landmark: data.landmark || null,
          zipcode: data.zipcode,
          addressType: data.addressType,
          // primary: data.primary,
        },
        {
          where: {
            id: data.addressId,
            customerId: data.customerId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  changePrimary: async (data, body) => {
    try {
      return await userDbController.Models.shippingAddress.update(
        {
          primary: body.primary,
        },
        {
          where: {
            id: data.id,
            customerId: data.customerId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  changeAllPrimary: async (data) => {
    try {
      return await userDbController.Models.shippingAddress.update(
        {
          primary: "no",
        },
        {
          where: {
            customerId: data.customerId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
};

userDbController.Wishlist = {
  fetchWishlist: async (tokenId) => {
    try {
      return await userDbController.Models.wishlist.findAll({
        where: {
          customerId: tokenId,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  checkWishlistExists: async (data, tokenId) => {
    try {
      return await userDbController.Models.wishlist.findOne({
        where: {
          customerId: tokenId,
          productId: data.productId,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },

  addWishlist: async (data, tokenId) => {
    try {
      return await userDbController.Models.wishlist.create({
        customerId: tokenId,
        productId: data.productId,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },

  removeWishlist: async (data) => {
    try {
      return await userDbController.Models.wishlist.destroy({
        where: {
          productId: data.productId,
          customerId: data.customerId,
          id: data.id,
        },
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
};

userDbController.Profile = {
  fetchProfile: async (token) => {
    try {
      const profile = await userDbController.Models.user.findOne({
        where: {
          id: token,
        },
        raw: true,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      if (profile.imageVerified != "0") {
        return profile;
      } else {
        delete profile.imageVerified;
        delete profile.images;
        return profile;
      }
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },

  checkUser: async (data) => {
    console.log(data);
    try {
      return await userDbController.Models.user.findOne({
        where: {
          email: data.email,
        },
      });
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },

  addProfile: async (data, image) => {
    try {
      return await userDbController.Models.user.create({
        userName: data.userName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        dob: data.dob,
        gender: data.gender,
        images: image,
        profileType: data.profileType,
        membershipType: data.membershipType,
        status: "inactive",
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },

  checkUserExists: async (data) => {
    try {
      return await userDbController.Models.user.findOne({
        where: {
          id: data,
        },
      });
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },

  userDetails: async (data, token) => {
    console.log(data);
    try {
      return await userDbController.Models.userDetails.create({
        userId: token,
        maritalStatus: data.maritalStatus,
        profileCreatedBy: data.profileCreatedBy,
        whatsapp: data.whatsapp,
        referedBy: data.referedBy,
        educationalQualification: data.educationalQualification,
        religion: data.religion,
        motherTongue: data.motherTongue,
        caste: data.caste,
        profession: data.profession,
        professionDesignation: data.professionDesignation,
        professionDesc: data.professionDesc,
        professionLocation: data.professionLocation,
        annualIncome: data.annualIncome,
      });
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },

  updateProfile: async (data, token) => {
    console.log(data.username);
    try {
      const updated = await userDbController.Models.user.update(
        {
          userName: data.username,
        },
        {
          where: {
            id: token,
            status: "active",
          },
        }
      );
      if (updated[0] != 0) {
        return "Updated successfully";
      } else {
        return "Error in update";
      }
    } catch (error) {
      throw Error.InternalError();
    }
  },
};

userDbController.Review = {
  getProductReview: async (data) => {
    try {
      return await userDbController.Models.reviews.findAll({
        where: {
          productId: data.productId,
          status: "active",
        },
        attributes: [
          "id",
          "customerName",
          "customerImage",
          "rating",
          "review",
          "createdAt",
        ],
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchMyReviews: async (token) => {
    try {
      return await userDbController.Models.productVariants.findAll({
        include: {
          model: Models.reviews,
          attributes: ["id", "rating", "review", "createdAt"],
          where: {
            customerId: token,
          },
        },
        attributes: [
          "productId",
          "productName",
          "variantImage",
          "actualPrice",
          "discountPrice",
        ],
        raw: true,
        nest: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  getProductRatings: async (data) => {
    try {
      return await userDbController.Models.reviews.findOne({
        where: {
          productId: data.productId,
          status: "active",
        },
        attributes: [
          [
            Sequelize.literal(
              "(SELECT COUNT(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                " AND reviews.rating=5)"
            ),
            "excellent",
          ],
          [
            Sequelize.literal(
              "(SELECT COUNT(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                " AND reviews.rating=4)"
            ),
            "best",
          ],
          [
            Sequelize.literal(
              "(SELECT COUNT(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                " AND reviews.rating=3)"
            ),
            "good",
          ],
          [
            Sequelize.literal(
              "(SELECT COUNT(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                " AND reviews.rating=2)"
            ),
            "poor",
          ],
          [
            Sequelize.literal(
              "(SELECT COUNT(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                " AND reviews.rating=1)"
            ),
            "verypoor",
          ],
          [
            Sequelize.literal(
              "(SELECT AVG(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                ")"
            ),
            "overallRatings",
          ],
          [
            Sequelize.literal(
              "(SELECT COUNT(rating) FROM reviews WHERE reviews.productId = " +
                data.productId +
                ")"
            ),
            "noOfRatings",
          ],
        ],
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  addProductReview: async (data) => {
    try {
      return await userDbController.Models.reviews.create({
        customerId: data.customerId,
        customerName: data.customerName,
        customerImage: data.customerImage,
        orderId: data.orderId,
        productId: data.productId,
        rating: data.rating,
        review: data.review,
        variantId: data.variantId,
        status: "active",
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  putProductReview: async (data, tokenId) => {
    try {
      return await userDbController.Models.reviews.update(
        {
          customerId: tokenId,
          rating: data.rating,
          review: data.review,
        },
        {
          where: {
            id: data.id,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  updateOrderReview: async (data) => {
    try {
      return await userDbController.Models.orders.update(
        {
          isReviewed: data.isReviewed,
        },
        {
          where: {
            orderId: data.orderId,
          },
        }
      );
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },
  destroyReview: async (data, tokenId) => {
    try {
      return await userDbController.Models.reviews.destroy({
        where: {
          customerId: tokenId,
          id: data.id,
        },
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
};

userDbController.Cart = {
  getCart: async (tokenId) => {
    try {
      return await userDbController.Models.cart.findAll({
        where: {
          customerId: tokenId,
          status: "active",
        },
        include: {
          model: Models.productVariants,
          attributes: ["availableStock", "variantImage"],
        },
        attributes: [
          "id",
          "productId",
          "productName",
          "variantId",
          "variantColor",
          "index",
          "variantImage",
          "units",
          "tax",
          "singleProductPrice",
          "actualPrice",
          "inclusiveGST",
          "totalPrice",
        ],
        raw: true,
        nest: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  getCartforCheckout: async (data) => {
    try {
      return await userDbController.Models.cart.findAll({
        where: {
          customerId: data.customerId,
          status: "active",
        },
        attributes: ["id", "totalPrice"],
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  getCount: async (tokenId) => {
    try {
      return await userDbController.Models.cart.count({
        where: {
          customerId: tokenId,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  getSum: async (tokenId) => {
    try {
      return await userDbController.Models.cart.findAll({
        where: {
          customerId: tokenId,
          status: "active",
        },
        raw: true,
        attributes: [
          [Sequelize.fn("sum", Sequelize.col("totalPrice")), "totalPrice"],
          [Sequelize.fn("sum", Sequelize.col("actualPrice")), "actualPrice"],
        ],
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  checkCartExists: async (data) => {
    try {
      return await userDbController.Models.cart.findOne({
        where: {
          customerId: data.customerId,
          variantId: data.variantId,
          // variantColor: data.variantColor,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },
  checkCartIdExists: async (data) => {
    try {
      return await userDbController.Models.cart.findOne({
        where: {
          id: data.cartId,
          status: "active",
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchCartArray: async (cartIds) => {
    try {
      return await userDbController.Models.cart.findAll({
        where: {
          id: {
            [Op.in]: cartIds,
          },
          status: "inactive",
        },
        raw: true,
        attributes: {
          exclude: [
            "status",
            "index",
            "actualPrice",
            "singleProductPrice",
            "customerId",
            "updatedAt",
            "inclusiveGST",
          ],
        },
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchUserCartArray: async (cartIds, token) => {
    try {
      return await userDbController.Models.cart.findAll({
        where: {
          id: {
            [Op.in]: cartIds,
          },
          customerId: token,
          status: "inactive",
        },
        raw: true,
        attributes: ["variantImage", "units"],
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  createCart: async (data) => {
    try {
      return await userDbController.Models.cart.create(
        {
          customerId: data.customerId,
          productId: data.productId,
          productName: data.productName,
          variantId: data.variantId,
          // variantColor: data.variantColor,
          variantImage: data.variantImage,
          singleProductPrice: data.singleProductPrice,
          actualPrice: data.actualPrice,
          totalPrice: data.totalPrice,
          inclusiveGST: data.inclusiveGST,
          tax: data.tax,
          units: data.units,
          index: data.index,
          status: data.status,
        },
        { raw: true }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  putCart: async (data) => {
    try {
      return await userDbController.Models.cart.update(
        {
          actualPrice: data.actualPrice,
          totalPrice: data.totalPrice,
          withGST: data.withGST,
          units: data.units,
        },
        {
          where: {
            id: data.cartId,
          },
        },
        { raw: true }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  archiveCart: async (data) => {
    try {
      return await userDbController.Models.cart.update(
        {
          status: "inactive",
        },
        {
          where: {
            id: {
              [Op.in]: data.cartIds,
            },
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  destroyCart: async (data) => {
    try {
      return await userDbController.Models.cart.destroy({
        where: {
          customerId: data.customerId,
          id: data.cartId,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
};

userDbController.Order = {
  fetchOrders: async (tokenId) => {
    try {
      return await userDbController.Models.orders.findAll({
        where: {
          customerId: tokenId,
          orderStatus: "accepted",
        },
        attributes: [
          "cartId",
          "orderId",
          "paidAmount",
          "orderStatus",
          "createdAt",
        ],
        raw: true,
        order: [["id", "DESC"]],
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchOrderbyId: async (data) => {
    try {
      return await userDbController.Models.orders.findAll({
        where: {
          customerId: data.customerId,
          orderId: data.orderId,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchbyOrderId: async (data) => {
    try {
      return await userDbController.Models.orders.findOne({
        where: {
          orderId: data.orderId,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  fetchOrderbyIntent: async (data) => {
    try {
      return await userDbController.Models.orders.findOne({
        where: {
          customerId: data.customerId,
          paymentIntent: data.paymentIntent,
        },
        raw: true,
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  getOrderDetails: async (data) => {
    try {
      return await userDbController.Models.orders.findOne({
        where: {
          orderId: data.orderId,
          customerId: data.customerId,
          orderStatus: {
            [Op.ne]: "pending",
          },
        },
        raw: true,
        attributes: [
          "cartId",
          "isReviewed",
          "deliveryType",
          "orderStatus",
          "createdAt",
          "orderId",
        ],
      });
    } catch (error) {
      throw Error.InternalError();
    }
  },
  createOrder: async (data) => {
    try {
      return await userDbController.Models.orders.create({
        customerId: data.token,
        cartId: data.cartId,
        orderId: data.orderId,
        totalAmount: data.amount,
        txnToken: data.paytmTxntoken,
        isReviewed: data.isReviewed,
      });
    } catch (error) {
      console.log(error);
      throw Error.InternalError();
    }
  },
  updatePaynowOrder: async (data) => {
    try {
      return await userDbController.Models.orders.update(
        {
          paymentMode:
            data.paymentMode + "," + data.bankName + "," + data.gatewayName,
          shippingAddress: data.addressId,
          paidAmount: data.txnAmount,
          txnStatus: data.txnStatus,
          paytmTransactionId: data.txnId,
          bankTransactionId: data.bankTxnId,
          txnTimeStamp: data.txnDate,
          checksumHash: data.checksum,
          deliveryType: data.deliveryType,
          orderStatus: "accepted",
          paymentStatus: "success",
        },
        {
          where: {
            customerId: data.customerId,
            orderId: data.orderId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
  updateCODOrder: async (data) => {
    try {
      return await userDbController.Models.orders.update(
        {
          shippingAddress: data.addressId,
          paidAmount: data.txnAmount,
          deliveryType: data.deliveryType,
          orderStatus: "accepted",
          paymentStatus: "pending",
        },
        {
          where: {
            customerId: data.customerId,
            orderId: data.orderId,
          },
        }
      );
    } catch (error) {
      throw Error.InternalError();
    }
  },
};
