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

const adminAuth = {
  properties: {
    adminId: {
      Id: {
        $ref: "defs#/definitions/adminAuth/Id",
      },
    },
    token: {
      $ref: "defs#/definitions/adminAuth/token",
    },
    ipv4: {
      $ref: "defs#/definitions/adminAuth/ipv4",
    },
    userAgent: {
      $ref: "defs#/definitions/adminAuth/user",
    },
    status: {
      $ref: "defs#/definitions/adminAuth/status",
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

const User = {
  properties: {
    Id: {
      $ref: "defs#/definitions/User/Id",
    },
    userName: {
      $ref: "defs#/definitions/User/userName",
    },
    email: {
      $ref: "defs#/definitions/User/email",
    },
    password: {
      $ref: "defs#/definitions/User/password",
    },
    phone: {
      $ref: "defs#/definitions/User/phone",
    },
    dob: {
      $ref: "defs#/definitions/User/dob",
    },
    gender: {
      $ref: "defs#/definitions/User/gender",
    },
    images: {
      $ref: "defs#/definitions/User/images",
    },
    profileType: {
      $ref: "defs#/definitions/User/profileType",
    },
    membershipType: {
      $ref: "defs#/definitions/User/membershipType",
    },
    status: {
      $ref: "defs#/definitions/User/status",
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

const userDocs = {
  properties: {
    Id: {
      $ref: "defs#/definitions/userDocs/Id",
    },
    userId: {
      $ref: "defs#/definitions/userDocs/userId",
    },
    aadhar: {
      $ref: "defs#/definitions/userDocs/aadhar",
    },
    educationDetails: {
      $ref: "defs#/definitions/userDocs/educationDetails",
    },
    horoscope: {
      $ref: "defs#/definitions/userDocs/horoscope",
    },
  },
};

const userMeta = {
  properties: {
    Id: {
      $ref: "defs#/definitions/userMeta/Id",
    },
    userId: {
      $ref: "defs#/definitions/userMeta/userId",
    },
    profileVisits: {
      $ref: "defs#/definitions/userMeta/profileVisits",
    },
    subscriptionId: {
      $ref: "defs#/definitions/userMeta/subscriptionId",
    },
    profileType: {
      $ref: "defs#/definitions/userMeta/profileType",
    },
    profileLikes: {
      $ref: "defs#/definitions/userMeta/profileLikes",
    },
  },
};

const userPersonality = {
  properties: {
    Id: {
      $ref: "defs#/defintions/userPersonality/Id",
    },
    userId: {
      $ref: "defs#/defintions/userPersonality/userId",
    },
    height: {
      $ref: "defs#/defintions/userPersonality/height",
    },
    weight: {
      $ref: "defs#/defintions/userPersonality/weight",
    },
    complexion: {
      $ref: "defs#/defintions/userPersonality/complexion",
    },
    bloodGroup: {
      $ref: "defs#/defintions/userPersonality/bloodGroup",
    },
    bodyType: {
      $ref: "defs#/defintions/userPersonality/bodyType",
    },
    physicalStatus: {
      $ref: "defs#/defintions/userPersonality/physicalStatus",
    },
    eyeWear: {
      $ref: "defs#/defintions/userPersonality/eyeWear",
    },
    hobbies: {
      $ref: "defs#/defintions/userPersonality/hobbies",
    },
    aboutMySelf: {
      $ref: "defs#/defintions/userPersonality/aboutMySelf",
    },
  },
};

const myfamily = {
  properties: {
    Id: {
      $ref: "defs#/defintions/myfamily/Id",
    },
    userId: {
      $ref: "defs#/defintions/myfamily/userId",
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
    fatherOccupation: {
      $ref: "defs#/defintions/myfamily/fatherOccupation",
    },
    motherOccupation: {
      $ref: "defs#/defintions/myfamily/motherOccupation",
    },
    familyType: {
      $ref: "defs#/defintions/myfamily/familyType",
    },
    siblingDetails: {
      $ref: "defs#/defintions/myfamily/siblingDetails",
    },
    financialStatus: {
      $ref: "defs#/defintions/myfamily/financialStatus",
    },
    propertyValues: {
      $ref: "defs#/defintions/myfamily/propertyValues",
    },
  },
};

const userLogs = {
  properties: {
    Id: {
      $ref: "defs#/defintions/userLogs/Id",
    },
    userId: {
      $ref: "defs#/defintions/userLogs/userId",
    },
    logDescription: {
      $ref: "defs#/defintions/userLogs/logDescription",
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
    razorPaymentId: {
      $ref: "defs#/defintions/payment/razorPaymentId",
    },
    razorSignature: {
      $ref: "defs#/defintions/payment/razorSignature",
    },
    paymentStatus: {
      $ref: "defs#/defintions/payment/paymentStatus",
    },
  },
};

const horoscope = {
  properties: {
    Id: {
      $ref: "defs#/defintions/horoscope/Id",
    },
    userId: {
      $ref: "defs#/defintions/horoscope/userId",
    },
    timeOfBirth: {
      $ref: "defs#/defintions/horoscope/timeOfBirth",
    },
    placeOfBirth: {
      $ref: "defs#/defintions/horoscope/placeOfBirth",
    },
    zodiacStar: {
      $ref: "defs#/defintions/horoscope/zodiacStar",
    },
    zodiacSign: {
      $ref: "defs#/defintions/horoscope/zodiacSign",
    },
    gothram: {
      $ref: "defs#/defintions/horoscope/gothram",
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

const userDetails = {
  properties: {
    Id: {
      $ref: "defs#/defintions/userDetails/Id",
    },
    userId: {
      $ref: "defs#/defintions/userDetails/userId",
    },
    maritalStatus: {
      $ref: "defs#/defintions/userDetails/maritalStatus",
    },
    profileCreatedBy: {
      $ref: "defs#/defintions/userDetails/profileCreatedBy",
    },
    whatsapp: {
      $ref: "defs#/defintions/userDetails/whatsapp",
    },
    referedBy: {
      $ref: "defs#/defintions/userDetails/referedBy",
    },
    educationalQualification: {
      $ref: "defs#/defintions/userDetails/educationalQualification",
    },
    religion: {
      $ref: "defs#/defintions/userDetails/religion",
    },
    motherTongue: {
      $ref: "defs#/defintions/userDetails/motherTongue",
    },
    caste: {
      $ref: "defs#/defintions/userDetails/caste",
    },
    profession: {
      $ref: "defs#/defintions/userDetails/profession",
    },
    professionDesignation: {
      $ref: "defs#/defintions/userDetails/professionDesignation",
    },
    professionDesc: {
      $ref: "defs#/defintions/userDetails/professionDesc",
    },
    professionLocation: {
      $ref: "defs#/defintions/userDetails/professionLocation",
    },
    annualIncome: {
      $ref: "defs#/defintions/userDetails/annualIncome",
    },
  },
};

const successStories = {
  properties: {
    Id: {
      $ref: "defs#/defintions/successStories/Id",
    },
    titlee: {
      $ref: "defs#/defintions/successStories/titlee",
    },
    image: {
      $ref: "defs#/defintions/successStories/image",
    },
  },
};

const whislist = {
  properties: {
    Id: {
      $ref: "defs#/defintions/whislist/Id",
    },
    userId: {
      $ref: "defs#/defintions/whislist/userId",
    },
    profileId: {
      $ref: "defs#/defintions/whislist/profileId",
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

const partnerPreference = {
  properties: {
    Id: {
      $ref: "defs#/defintions/partnerPreference/Id",
    },
    userId: {
      $ref: "defs#/defintions/partnerPreference/userId",
    },
    age: {
      $ref: "defs#/defintions/partnerPreference/age",
    },
    height: {
      $ref: "defs#/defintions/partnerPreference/height",
    },
    dhosam: {
      $ref: "defs#/defintions/partnerPreference/dhosam",
    },
    rahuKetu: {
      $ref: "defs#/defintions/partnerPreference/rahuKetu",
    },
    annualIncome: {
      $ref: "defs#/defintions/partnerPreference/annualIncome",
    },
    foreigninterest: {
      $ref: "defs#/defintions/partnerPreference/foreigninterest",
    },
    maritalStatus: {
      $ref: "defs#/defintions/partnerPreference/maritalStatus",
    },
    status: {
      $ref: "defs#/defintions/partnerPreference/status",
    },
  },
};

const userFollowing = {
  properties: {
    Id: {
      $ref: "defs#/defintions/userFollowing/Id",
    },
    userId: {
      $ref: "defs#/defintions/userFollowing/userId",
    },
    following: {
      $ref: "defs#/defintions/userFollowing/following",
    },
  },
};

const pushMessaging = {
  properties: {
    Id: {
      $ref: "defs#/defintions/pushMessaging/Id",
    },
    title: {
      $ref: "defs#/defintions/pushMessaging/titlee",
    },
    image: {
      $ref: "defs#/defintions/pushMessaging/image",
    },
    description: {
      $ref: "defs#/defintions/pushMessaging/desc",
    },
  },
};

const banner = {
  properties: {
    Id: {
      $ref: "defs#/defintions/banner/Id",
    },
    link: {
      $ref: "defs#/defintions/banner/link",
    },
    image: {
      $ref: "defs#/defintions/banner/image",
    },
    description: {
      $ref: "defs#/defintions/banner/desc",
    },
    status: {
      $ref: "defs#/defintions/banner/status",
    },
  },
};

export const userLogin = {
  type: "object",
  $id: "userLogin",
  additionalProperties: false,
  properties: {
    email: User.properties.email,
    password: User.properties.password,
  },
  required: ["email", "password"],
};

export const sendEmail = {
  type: "object",
  $id: "sendEmail",
  additionalProperties: false,
  properties: {
    email: User.properties.email,
    password: User.properties.password,
  },
  required: ["email", "password"],
};

export const verifyLogin = {
  type: "object",
  $id: "verifyLogin",
  additionalProperties: false,
  properties: {
    email: User.properties.email,
    password: User.properties.password,
  },
  required: ["email", "password"],
};

export const AdminCreate = {
  type: "object",
  $id: "AdminCreate",
  additionalProperties: false,
  properties: {
    username: Admin.properties.username,
    email: Admin.properties.email,
    password: Admin.properties.password,
    phone: Admin.properties.phone,
  },
  required: ["email", "password", "phone"],
};

export const successStoriesCreate = {
  type: "object",
  $id: "successStoriesCreate",
  additionalProperties: false,
  properties: {
    titlee: successStories.properties.titlee,
    image: successStories.properties.image,
  },
  required: ["titlee", "image"],
};

export const UserCreate = {
  type: "object",
  $id: "UserCreate",
  additionalProperties: false,
  properties: {
    userName: User.properties.userName,
    email: User.properties.email,
    password: User.properties.password,
    phone: User.properties.phone,
    dob: User.properties.dob,
    gender: User.properties.gender,
    images: User.properties.images,
    profileType: User.properties.profileType,
    membershipType: User.properties.membershipType,
  },
  required: [
    "userName",
    "email",
    "password",
    "phone",
    "dob",
    "gender",
    "profileType",
    "membershipType",
  ],
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

// export const ReviewsCreate = {
//   type: "object",
//   $id: "ReviewsCreate",
//   additionalProperties: false,
//   properties: {
//     reviewId: Reviews.properties.reviewId,
//     customerId: Reviews.properties.customerId,
//     productId: Reviews.properties.productId,
//     rating: Reviews.properties.rating,
//     review: Reviews.properties.review,
//     // arrayOfImages: Reviews.properties.arrayOfImages,
//     // status: Reviews.properties.status,
//   },
//   required: ["reviewId", "customerId", "productId", "rating", "review"],
// };

export const userDocsCreate = {
  type: "object",
  $id: "userDocsCreate",
  additionalProperties: false,
  properties: {
    userId: userDocs.properties.userId,
    aadhar: userDocs.properties.aadhar,
    educationDetails: userDocs.properties.educationDetails,
    horoscope: userDocs.properties.horoscope,
  },
  required: ["userId", "aadhar", "educationDetails", "horoscope"],
};

export const userMetaCreate = {
  type: "object",
  $id: "userMetaCreate",
  additionalProperties: false,
  properties: {
    userId: userMeta.properties.userId,
    profileVisits: userMeta.properties.profileVisits,
    subscriptionId: userMeta.properties.subscriptionId,
    profileType: userMeta.properties.profileType,
    profileLikes: userMeta.properties.profileLikes,
  },
  required: [
    "userId",
    "profileVisits",
    "subscriptionId",
    "profileType",
    "profileLikes",
  ],
};

export const userPersonalityCreate = {
  type: "object",
  $id: "userPersonalityCreate",
  additionalProperties: false,
  properties: {
    userId: userPersonality.properties.userId,
    height: userPersonality.properties.height,
    weight: userPersonality.properties.weight,
    complexion: userPersonality.properties.complexion,
    bloodGroup: userPersonality.properties.bloodGroup,
    bodyType: userPersonality.properties.bodyType,
    physicalStatus: userPersonality.properties.physicalStatus,
    eyeWear: userPersonality.properties.eyeWear,
    hobbies: userPersonality.properties.hobbies,
    aboutMySelf: userPersonality.properties.aboutMySelf,
  },
  required: [
    "userId",
    "height",
    "weight",
    "complexion",
    "bloodGroup",
    "bodyType",
    "physicalStatus",
    "eyeWear",
    "hobbies",
    "aboutMySelf",
  ],
};

export const myfamilyCreate = {
  type: "object",
  $id: "myfamilyCreate",
  additionalProperties: false,
  properties: {
    userId: myfamily.properties.userId,
    fatherName: myfamily.properties.fatherName,
    motherName: myfamily.properties.motherName,
    fatherAlive: myfamily.properties.fatherAlive,
    motherAlive: myfamily.properties.motherAlive,
    fatherOccupation: myfamily.properties.fatherOccupation,
    motherOccupation: myfamily.properties.motherOccupation,
    familyType: myfamily.properties.familyType,
    siblingDetails: myfamily.properties.siblingDetails,
    financialStatus: myfamily.properties.financialStatus,
    propertyValues: myfamily.properties.propertyValues,
  },
  required: [
    "userId",
    "fatherName",
    "motherName",
    "fatherAlive",
    "motherAlive",
    "fatherOccupation",
    "motherOccupation",
    "familyType",
    "siblingDetails",
    "financialStatus",
    "propertyValues",
  ],
};

export const userLogsCreate = {
  type: "object",
  $id: "userLogsCreate",
  additionalProperties: false,
  properties: {
    userId: userLogs.properties.userId,
    logDescription: userLogs.properties.logDescription,
  },
  required: ["userId", "logDescription"],
};

export const horoscopeCreate = {
  type: "object",
  $id: "horoscopeCreate",
  additionalProperties: false,
  properties: {
    userId: horoscope.properties.userId,
    timeOfBirth: horoscope.properties.timeOfBirth,
    placeOfBirth: horoscope.properties.placeOfBirth,
    zodiacStar: horoscope.properties.zodiacStar,
    zodiacSign: horoscope.properties.zodiacSign,
    gothram: horoscope.properties.gothram,
    padham: horoscope.properties.padham,
    selectLagnam: horoscope.properties.selectLagnam,
    madhulam: horoscope.properties.madhulam,
  },
  required: [
    "userId",
    "timeOfBirth",
    "placeOfBirth",
    "zodiacStar",
    "zodiacSign",
    "gothram",
    "padham",
    "selectLagnam",
    "madhulam",
  ],
};

export const userDetailsCreate = {
  type: "object",
  $id: "userDetailsCreate",
  additionalProperties: false,
  properties: {
    userId: userDetails.properties.userId,
    maritalStatus: userDetails.properties.maritalStatus,
    profileCreatedBy: userDetails.properties.profileCreatedBy,
    whatsapp: userDetails.properties.whatsapp,
    referedBy: userDetails.properties.referedBy,
    educationalQualification: userDetails.properties.educationalQualification,
    religion: userDetails.properties.religion,
    motherTongue: userDetails.properties.motherTongue,
    caste: userDetails.properties.caste,
    profession: userDetails.properties.profession,
    professionDesignation: userDetails.properties.professionDesignation,
    professionDesc: userDetails.properties.professionDesc,
    professionLocation: userDetails.properties.professionLocation,
    annualIncome: userDetails.properties.annualIncome,
  },
  required: [
    "userId",
    "maritalStatus",
    "profileCreatedBy",
    "whatsapp",
    "referedby",
    "educationalQualification",
    "religion",
    "motherTongue",
    "caste",
    "profession",
    "professionDesignation",
    "professionDesc",
    "professionLocation",
    "annualIncome",
  ],
};

export const whislistCreate = {
  type: "object",
  $id: "whislistCreate",
  additionalProperties: false,
  properties: {
    userId: whislist.properties.userId,
    profileId: whislist.properties.profileId,
    status: whislist.properties.status,
  },
  required: ["userId", "profileId", "status"],
};

export const subscriptionCreate = {
  type: "object",
  $id: "subscriptionCreate",
  additionalProperties: false,
  properties: {
    name: subscription.properties.name,
    durationFrom: subscription.properties.durationFrom,
    durationTo: subscription.properties.durationTo,
  },
  required: ["name", "durationFrom", "durationTo"],
};

export const partnerPreferenceCreate = {
  type: "object",
  $id: "partnerPreferenceCreate",
  additionalProperties: false,
  properties: {
    userId: partnerPreference.properties.userId,
    age: partnerPreference.properties.age,
    height: partnerPreference.properties.height,
    dhosam: partnerPreference.properties.dhosam,
    rahuKetu: partnerPreference.properties.rahuKetu,
    annualIncome: partnerPreference.properties.annualIncome,
    foreigninterest: partnerPreference.properties.foreigninterest,
    maritalStatus: partnerPreference.properties.maritalStatus,
    status: partnerPreference.properties.status,
  },
  required: [
    "userId",
    "age",
    "height",
    "dhosam",
    "rahuKetu",
    "annualIncome",
    "foreigninterest",
    "maritalStatus",
    "status",
  ],
};

export const userFollowingCreate = {
  type: "object",
  $id: "userFollowingCreate",
  additionalProperties: false,
  properties: {
    userId: userFollowing.properties.userId,
    following: userFollowing.properties.following,
  },
  required: ["userId", "following"],
};

export const pushMessagingCreate = {
  type: "object",
  $id: "pushMessagingCreate",
  additionalProperties: false,
  properties: {
    title: pushMessaging.properties.title,
    image: pushMessaging.properties.image,
    description: pushMessaging.properties.description,
  },
  required: ["title", "image", "description"],
};

export const bannerCreate = {
  type: "object",
  $id: "bannersCreate",
  additionalProperties: false,
  properties: {
    link: banner.properties.link,
    image: banner.properties.image,
    description: banner.properties.description,
    status: banner.properties.status,
  },
  required: ["link", "image", "description", "status"],
};
