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

const member = {
  properties: {
    memberId: {
      $ref: "defs#/definitions/member/memberId",
    },
    companyName: {
      $ref: "defs#/defintions/member/companyName",
    },
    gender: {
      $ref: "defs#/defintions/member/gender",
    },
    placeOfBirth: {
      $ref: "defs#/defintions/member/placeOfBirth",
    },
    profileCreatedBy: {
      $ref: "defs#/defintions/member/profileCreatedBy",
    },
    mobile: {
      $ref: "defs#/defintions/member/mobile",
    },
    mobile2: {
      $ref: "defs#/defintions/member/mobile2",
    },
    address: {
      $ref: "defs#/defintions/member/address",
    },
    country: {
      $ref: "defs#/defintions/member/country",
    },
    state: {
      $ref: "defs#/defintions/member/state",
    },
    pincode: {
      $ref: "defs#/defintions/member/pincode",
    },
    password: {
      $ref: "defs#/defintions/member/password",
    },
    dob: {
      $ref: "defs#/defintions/member/dob",
    },
    timeOfBirth: {
      $ref: "defs#/defintions/member/timeOfBirth",
    },
    religion: {
      $ref: "defs#/defintions/member/religion",
    },
    motherTongue: {
      $ref: "defs#/defintions/member/motherTongue",
    },
    maritalStatus: {
      $ref: "defs#/defintions/member/maritalStatus",
    },
    whatsapp: {
      $ref: "defs#/defintions/member/whatsapp",
    },
    email: {
      $ref: "defs#/defintions/member/email",
    },
    city: {
      $ref: "defs#/defintions/member/city",
    },
    referedBy: {
      $ref: "defs#/defintions/member/referedBy",
    },
  },
};

const referenceDetails = {
  properties: {
    referenceId: {
      $ref: "defs#/defintions/referenceDetails/referenceId",
    },
    name: {
      $ref: "defs#/defintions/referenceDetails/name",
    },
    city: {
      $ref: "defs#/defintions/referenceDetails/city",
    },
    mobile: {
      $ref: "defs#/defintions/referenceDetails/mobile",
    },
  },
};

const payment = {
  properties: {
    paymentId: {
      $ref: "defs#/defintions/payment/paymentId",
    },
    razorOrderId: {
      $ref: "defs#/defintions/payment/razorOrderId",
    },
  },
  razorPaymentId: {
    $ref: "defs#/defintions/payment/razorPaymentId",
  },
  razorSignature: {
    $ref: "defs#/defintions/payment/razorSignature",
  },
  paymentStatus: {
    $ref: "defs#/defintions/payment/paymentStatus",
  },
};

const myfamily = {
  properties: {
    familyId: {
      $ref: "defs#/defintions/myfamily/familyId",
    },
    fatherName: {
      $ref: "defs#/defintions/myfamily/fatherName",
    },
    motherName: {
      $ref: "defs#/defintions/myfamily/motherName",
    },
    fatherAlive: {
      $ref: "defs#/defintions/myfamily/fatherAlive",
    },
    motherAlive: {
      $ref: "defs#/defintions/myfamily/motherAlive",
    },
    fathersOccupation: {
      $ref: "defs#/defintions/myfamily/fathersOccupation",
    },
    mothersOccupation: {
      $ref: "defs#/defintions/myfamily/mothersOccupation",
    },
    sisters: {
      $ref: "defs#/defintions/myfamily/sisters",
    },
    brothers: {
      $ref: "defs#/defintions/myfamily/mothers",
    },
    familyStatus: {
      $ref: "defs#/defintions/myfamily/familyStatus",
    },
    propertyDetails: {
      $ref: "defs#/defintions/myfamily/propertyDetails",
    },
  },
};

const horoscope = {
  properties: {
    horoscopeId: {
      $ref: "defs#/defintions/horoscope/horoscopeId",
    },
    selectStar: {
      $ref: "defs#/defintions/horoscope/selectStar",
    },
    selectRasi: {
      $ref: "defs#/defintions/horoscope/selectRasi",
    },
    suryaGothram: {
      $ref: "defs#/defintions/horoscope/suryaGothram",
    },
    padham: {
      $ref: "defs#/defintions/horoscope/padham",
    },
    selectLagnam: {
      $ref: "defs#/defintions/horoscope/selectLagnam",
    },
    madhulam: {
      $ref: "defs#/defintions/horoscope/madhulam",
    },
  },
};

const photoUpload = {
  properties: {
    photoId: {
      $ref: "defs#/defintions/photoUpload/photoId",
    },
    photo1: {
      $ref: "defs#/defintions/photoUpload/photo1",
    },
    photo2: {
      $ref: "defs#/defintions/photoUpload/photo2",
    },
    photo3: {
      $ref: "defs#/defintions/photoUpload/photo3",
    },
    idProof: {
      $ref: "defs#/defintions/photoUpload/idProof",
    },
    horoscope: {
      $ref: "defs#/defintions/photoUpload/horoscope",
    },
  },
};

const educationAndProfession = {
  properties: {
    educationId: {
      $ref: "defs#/defintions/educationAndProfession/educationId",
    },
    educationalQualification: {
      $ref: "defs#/defintions/educationAndProfession/educationalQualification",
    },
    educationDetails: {
      $ref: "defs#/defintions/educationAndProfession/educationDetails",
    },
    historyOfYourEducation: {
      $ref: "defs#/defintions/educationAndProfession/historyOfYourEducation",
    },
    profession: {
      $ref: "defs#/defintions/educationAndProfession/profession",
    },
    professionDetail: {
      $ref: "defs#/defintions/educationAndProfession/professionDetail",
    },
    grossAnnualIncome: {
      $ref: "defs#/defintions/educationAndProfession/grossAnnualIncome",
    },
    annualIncomeInINR: {
      $ref: "defs#/defintions/educationAndProfession/annualIncomeInINR",
    },
    actualCTC: {
      $ref: "defs#/defintions/educationAndProfession/actualCTC",
    },
    stayingState: {
      $ref: "defs#/defintions/educationAndProfession/stayingState",
    },
    stayingCountry: {
      $ref: "defs#/defintions/educationAndProfession/stayingCountry",
    },
    stayingCity: {
      $ref: "defs#/defintions/educationAndProfession/stayingCity",
    },
  },
};

const whislist = {
  properties: {
    whislistId: {
      $ref: "defs#/defintions/whislist/whislistId",
    },
    partnerId: {
      $ref: "defs#/defintions/whislist/partnerId",
    },
    status: {
      $ref: "defs#/defintions/whislist/status",
    },
  },
};

const subscription = {
  properties: {
    subscriptionId: {
      $ref: "defs#/defintions/subscription/subscriptionId",
    },
    name: {
      $ref: "defs#/defintions/subscription/name",
    },
    durationFrom: {
      $ref: "defs#/defintions/subscription/durationFrom",
    },
    durationTo: {
      $ref: "defs#/defintions/subscription/durationTo",
    },
  },
};

const personalDetails = {
  properties: {
    personalId: {
      $ref: "defs#/defintions/personalDetails/personalId",
    },
    height: {
      $ref: "defs#/defintions/personalDetails/height",
    },
    weight: {
      $ref: "defs#/defintions/personalDetails/weight",
    },
    complexion: {
      $ref: "defs#/defintions/personalDetails/complexion",
    },
    bodyType: {
      $ref: "defs#/defintions/personalDetails/bodyType",
    },
    physicalStatus: {
      $ref: "defs#/defintions/personalDetails/physicalStatus",
    },
    eyeWear: {
      $ref: "defs#/defintions/personalDetails/eyeWear",
    },
    hobbies: {
      $ref: "defs#/defintions/personalDetails/hobbies",
    },
    aboutMySelf: {
      $ref: "defs#/defintions/personalDetails/aboutMySelf",
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
  required: ["reviewId", "customerId", "productId", "rating", "review"],
};
