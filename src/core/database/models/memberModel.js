import sequelize from "sequelize";
const { Model, DataTypes } = sequelize;
import { connection } from "../connection.js";

class member extends Model {}

member.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    companyName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
      defaultValue: "male",
    },
    placeOfBirth: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    profileCreatedBy: {
      type: DataTypes.ENUM("friend", "self", "parent", "guardian", "sibling"),
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile2: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pincode: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    timeOfBirth: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    religion: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    motherTongue: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    maritalStatus: {
      type: DataTypes.ENUM(
        "never married",
        "married",
        "divorced",
        "separated",
        "widow/widower"
      ),
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    referedBy: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class referenceDetails extends Model {}

referenceDetails.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

// class customerAuthentication extends Model {}

// customerAuthentication.init(
//   {
//     id: {
//       type: DataTypes.BIGINT.UNSIGNED,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     token: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     ipv4: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     userAgent: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//   },
//   { sequelize: connection, freezeTableName: true }
// );

class payment extends Model {}

payment.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    razorOrderId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    razorPaymentId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    razorSignature: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "success", "failed", "refunded"),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class myfamily extends Model {}

myfamily.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    motherName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fatherAlive: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    motherAlive: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    fathersOccupation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mothersOccupation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    sisters: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    brothers: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    familyStatus: {
      type: DataTypes.ENUM(
        "lower middle class",
        "middle class",
        "upper middle class",
        "rich",
        "very rich",
        "affluent"
      ),
      allowNull: false,
    },
    propertyDetails: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class horoscope extends Model {}

horoscope.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    selectStar: {
      type: DataTypes.ENUM(
        "Ashwini",
        "Barani",
        "Karthikai",
        "Roshini",
        "Mirugasiridam",
        "Thiruvadhirai",
        "Punarpoosam",
        "Poosam",
        "Ayilyam",
        "Magam",
        "Pooram",
        "Uthiram",
        "Astham",
        "Chithirai",
        "Swathi",
        "Visagam",
        "Anusham",
        "Kettai",
        "Mulam",
        "Puradam",
        "Uthiradam",
        "Thiruvonam",
        "Avittam",
        "Sadayam",
        "Purattadhi",
        "Uttrttadhi",
        "Revathi"
      ),
      allowNull: false,
    },
    selectRasi: {
      type: DataTypes.ENUM(
        "Mesham",
        "Rishabam",
        "Midhunam",
        "Kadagam",
        "Simmam",
        "Kanni",
        "Thulam",
        "Viruchigam",
        "Dhanus",
        "Magaram",
        "Kumbam",
        "Meenam"
      ),
      allowNull: false,
    },
    suryaGothram: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    padham: {
      type: DataTypes.ENUM("1", "2", "3", "4"),
      allowNull: false,
    },
    selectLagnam: {
      type: DataTypes.ENUM(
        "Mesham",
        "Rishabam",
        "Midhunam",
        "Kadagam",
        "Simmam",
        "Kanni",
        "Thulam",
        "Viruchigam",
        "Dhanus",
        "Magaram",
        "Kumbam",
        "Meenam"
      ),
      allowNull: false,
    },
    madhulam: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class photoUpload extends Model {}

photoUpload.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    photo1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    photo2: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    photo3: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    idProof: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    horoscope: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class educationAndProfession extends Model {}

educationAndProfession.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    educationalQualification: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    educationDetails: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    historyOfYourEducation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    profession: {
      type: DataTypes.ENUM(
        "employee",
        "business",
        "student",
        "not working",
        "not mentioned"
      ),
      allowNull: false,
    },
    professionDetail: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    grossAnnualIncome: {
      type: DataTypes.ENUM("$", "£", "€", "₹"),
      allowNull: false,
    },
    annualIncomeInINR: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    actualCTC: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stayingState: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stayingCountry: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stayingCity: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class whislist extends Model {}

whislist.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    partnerId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "terminated"),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class subscription extends Model {}

subscription.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    durationFrom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    durationTo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class personalDetails extends Model {}

personalDetails.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    complexion: {
      type: DataTypes.ENUM(
        "very fair",
        "fair",
        "wheatish",
        "wheatish brownn",
        "dark"
      ),
      allowNull: false,
    },
    bodyType: {
      type: DataTypes.ENUM("slim", "fat", "normal"),
      allowNull: false,
    },
    physicalStatus: {
      type: DataTypes.ENUM("normal", "physically challenged"),
      allowNull: false,
    },
    eyeWear: {
      type: DataTypes.ENUM("yes", "no"),
      allowNull: false,
    },
    hobbies: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    aboutMySelf: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

export {
  member,
  referenceDetails,
  payment,
  myfamily,
  horoscope,
  photoUpload,
  educationAndProfession,
  whislist,
  subscription,
  personalDetails,
};
