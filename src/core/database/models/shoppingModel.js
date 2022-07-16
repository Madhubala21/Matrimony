import sequelize from "sequelize";
const { Model, DataTypes } = sequelize;
import { connection } from "../connection.js";

class wishlist extends Model { }

wishlist.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    productId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class cart extends Model { }

cart.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    productId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    variantId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    variantColor: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    variantImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    singleProductPrice: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    actualPrice: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    inclusiveGST: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    units: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0",
    },
    index: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    tax: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "0",
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "terminated"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class orders extends Model { }

orders.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: false,
    },
    shippingAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },
    cartId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      // defaultValue: "notfound",
    },
    orderId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },

    paymentIntent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },
    clientSecret: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },
    paymentMethod: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },
    paymentTransactionId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },
    // txnToken: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   defaultValue: "notfound",
    // },
    // checksumHash: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   defaultValue: "notfound",
    // },
    // paymentMode: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   defaultValue: "notfound",
    // },
    // bankTransactionId: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   defaultValue: "notfound",
    // },
    // txnTimeStamp: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   defaultValue: "notfound",
    // },
    txnStatus: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "notfound",
    },
    totalAmount: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: false,
    },
    paidAmount: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: false,
    },
    // reason: {
    //   type: DataTypes.TEXT,
    //   allowNull: true,
    //   defaultValue: "notfound",
    // },
    deliveryType: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "notfound",
    },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "success", "failed", "refunded"),
      allowNull: false,
      defaultValue: "pending",
    },
    isReviewed: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "[]",
    },
    orderStatus: {
      type: DataTypes.ENUM("declined", "pending", "accepted", "packaging", "dispatched", "delivered"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  { sequelize: connection, freezeTableName: true }
);


class reviews extends Model { }

reviews.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    customerId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    customerImage: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    productId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    variantId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    rating: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "terminated"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  { sequelize: connection, freezeTableName: true }
);
class faq extends Model { }

faq.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  { sequelize: connection, freezeTableName: true }
);
export { wishlist, cart, orders, reviews, faq };
