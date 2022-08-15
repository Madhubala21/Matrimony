import dotenv from "dotenv";
dotenv.config();

export const mode = process.env.NODE_ENV;

export const development = {
  database: {
    appName: process.env.APP_NAME,
    db_name: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
  },
  server: {
    port: process.env.DEV_PORT,
    mode: process.env.NODE_ENV,
  },
};

export const production = {
  database: {
    appName: process.env.APP_NAME,
    db_name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
  server: {
    port: process.env.PORT,
  },
};


export const defaultdata = {
  configuration: {
    baseUrl: "https://api.bioforhealth.in",
    hostEmail: "mail.bioforhealth.in",
    placeholder: "https://ik.imagekit.io/lokki/Avatar/placeholder_XFzrDmSml.png?updatedAt=1638958916450",
    shippingFee: 40,
    messagingId: "null",
    messagingKey: "null",
    paymentEnvironment: "WEBSTAGING",
    paymentGatewayId: "vvWMxM24884251144891",
    paymentGatewaySecret: "7hkxmLQK89B2_U30",
    paymentCallback: "https://securegw.paytm.in/theia/paytmCallback?ORDER_ID=",
    passwordSecret: "helloeveryone",
    jwtClientSecret: "heythere",
    jwtAdminSecret: "hellothere",
    jwtEmailSecret: "haithere",
    status: "active",
  },
  admin: {
    username: "admin",
    email: "admin@gmail.com",
    phone: "+919876789098",
    password: "U2FsdGVkX19JbO8UmNaMnVdii4pBMdkF2YGSsZsEcf0=",
    status: "active",
    type: "ROOT"
  },
}
