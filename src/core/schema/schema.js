const Admin = {
    properties: {
        adminId: {
            $ref: "defs#/definitions/Admin/adminId",
        },
        username: {
            $ref: "defs#/definitions/Admin/username",
        },
        email: {
            $ref: "defs#/definitions/Admin/email",
        },
        phone: {
            $ref: "defs#/definitions/Admin/phone",
        },
        password: {
            $ref: "defs#/definitions/Admin/password",
        },
        status: {
            $ref: "defs#/definitions/Admin/status",
        },
        adminType: {
            $ref: "defs#/definitions/Admin/adminType",
        },
    },
};

const appConfig = {
    properties: {
        configId: {
            $ref: "defs#/definitions/appConfig/configId",
        },
        baseUrl: {
            $ref: "defs#/definitions/appConfig/baseUrl",
        },
        hostEmail: {
            $ref: "defs#/definitions/appConfig/hostEmail",
        },
        placeholder: {
            $ref: "defs#/definitions/appConfig/placeholder",
        },
        shippingFee: {
            $ref: "defs#/definitions/appConfig/shippingFee",
        },
        messagingKey: {
            $ref: "defs#/definitions/appConfig/messagingKey",
        },
        paymentGatewayId: {
            $ref: "defs#/definitions/appConfig/paymentGatewayId",
        },
        paymentGatewaySecret: {
            $ref: "defs#/definitions/appConfig/paymentGatewaySecret",
        },
        paymentCallback: {
            $ref: "defs#/definitions/appConfig/paymentCallback",
        },
        passwordSecret: {
            $ref: "defs#/definitions/appConfig/passwordSecret",
        },
        jwtClientSecret: {
            $ref: "defs#/definitions/appConfig/jwtClientSecret",
        },
        jwtAdminSecret: {
            $ref: "defs#/definitions/appConfig/jwtAdminSecret",
        },
        jwtEmailSecret: {
            $ref: "defs#/definitions/appConfig/jwtEmailSecret",
        },
        status: {
            $ref: "defs#/definitions/appConfig/status",
        },
    },
};

const adminAuth = {
    properties: {
        authId: {
            $ref: "defs#/definitions/adminAuth/authId",
        },
        uid: {
            $ref: "defs#/definitions/adminAuth/uid",
        },
        token: {
            $ref: "defs#/definitions/adminAuth/token",
        },
        ipv4: {
            $ref: "defs#/definitions/adminAuth/ipv4",
        },
        user: {
            $ref: "defs#/definitions/adminAuth/user",
        },
        latLong: {
            $ref: "defs#/definitions/adminAuth/latLong",
        },
        status: {
            $ref: "defs#/definitions/adminAuth/status",
        },
    },
};

const userAuth = {
    properties: {
        authId: {
            $ref: "defs#/definitions/userAuth/authId",
        },
        token: {
            $ref: "defs#/definitions/userAuth/token",
        },
        ipv4: {
            $ref: "defs#/definitions/userAuth/ipv4",
        },
        userAgent: {
            $ref: "defs#/definitions/userAuth/userAgent",
        },
    },
};







export const userLogin = {
    type: "object",
    $id: "userLogin",
    additionalProperties: false,
    properties: {
        email: Customer.properties.email,
        password: Customer.properties.password,
    },
    required: ["email", "password"],
};

export const sendEmail = {
    type: "object",
    $id: "sendEmail",
    additionalProperties: false,
    properties: {
        email: Customer.properties.email,
        code: Customer.properties.code,
        password: Customer.properties.password,
    },
    required: ["email", "password"],
};
export const verifyLogin = {
    type: "object",
    $id: "verifyLogin",
    additionalProperties: false,
    properties: {
        email: Customer.properties.email,
        code: Customer.properties.code,
        password: Customer.properties.password,
    },
    required: ["email", "password"],
};



export const AdminCreate = {
    type: "object",
    $id: "AdminCreate",
    additionalProperties: false,
    properties: {
        email: Admin.properties.email,
        password: Admin.properties.password,
        phone: Admin.properties.phone,
    },
    required: ["email", "password", "phone"],
};

export const appConfigCreate = {
    type: "object",
    $id: "appConfigCreate",
    additionalProperties: false,
    properties: {
        baseUrl: appConfig.properties.baseUrl,
        hostEmail: appConfig.properties.hostEmail,
        messagingKey: appConfig.properties.messagingKey,
        paymentGatewayId: appConfig.properties.paymentGatewayId,
        paymentGatewaySecret: appConfig.properties.paymentGatewaySecret,
        passwordSecret: appConfig.properties.passwordSecret,
        jwtClientSecret: appConfig.properties.jwtClientSecret,
        jwtAdminSecret: appConfig.properties.jwtAdminSecret,
        jwtEmailSecret: appConfig.properties.jwtEmailSecret,
    },
    required: [
        "baseUrl",
        "hostEmail",
        "messagingKey",
        "paymentGatewayId",
        "paymentGatewaySecret",
        "passwordSecret",
        "jwtClientSecret",
        "jwtAdminSecret",
        "jwtEmailSecret",
    ],
};

export const ReviewsCreate = {
    type: "object",
    $id: "ReviewsCreate",
    additionalProperties: false,
    properties: {
        reviewId: Reviews.properties.reviewId,
        customerId: Reviews.properties.customerId,
        productId: Reviews.properties.productId,
        rating: Reviews.properties.rating,
        review: Reviews.properties.review,
        // arrayOfImages: Reviews.properties.arrayOfImages,
        // status: Reviews.properties.status,
    },
    required: [
        "reviewId",
        "customerId",
        "productId",
        "rating",
        "review",
    ],
};
