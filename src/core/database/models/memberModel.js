import sequelize from "sequelize";
const { Model, DataTypes } = sequelize;
import { connection } from "../connection.js";

class user extends Model {}

user.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    userName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("MALE", "FEMALE"),
      allowNull: true,
      defaultValue: "male",
    },
    images: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    profileType: {
      type: DataTypes.ENUM("PUBLIC", "PRIVATE"),
      allowNull: true,
      defaultValue: "PRIVATE",
    },
    membershipType: {
      type: DataTypes.ENUM("PREMIUM", "NORMAL"),
      allowNull: true,
      defaultValue: "NORMAL",
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class userAuthentication extends Model {}

userAuthentication.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ipv4: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class userDocs extends Model {}

userDocs.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    aadhar: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    educationDetails: {
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

class userMeta extends Model {}

userMeta.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    profileVisits: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    subscriptionId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    profileType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    profileLikes: {
      type: DataTypes.STRING(255),
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
    userId: {
      type: DataTypes.INTEGER(255),
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
    fatherOccupation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    motherOccupation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    familyType: {
      type: DataTypes.ENUM("Nuclear family", "Join family"),
      allowNull: false,
    },
    siblingDetails: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    financialStatus: {
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
    propertyValues: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class userLogs extends Model {}

userLogs.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    logDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

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

class horoscope extends Model {}

horoscope.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    timeOfBirth: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    placeOfBirth: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    zodiacSign: {
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
    zodiacStar: {
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
    gothram: {
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

class userPersonality extends Model {}

userPersonality.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
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
    bloodGroup: {
      type: DataTypes.ENUM("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"),
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

class userDetails extends Model {}

userDetails.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER(255),
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
    profileCreatedBy: {
      type: DataTypes.ENUM("friend", "self", "parent", "guardian", "sibling"),
      allowNull: true,
    },
    whatsapp: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    referedBy: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    educationalQualification: {
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
    caste: {
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
    professionDesignation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    professionDesc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    professionLocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    annualIncome: {
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
    userId: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    profileId: {
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

class partnerPreference extends Model {}

partnerPreference.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER(255),
      allowNull: false,
    },
    dhosam: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    rahuKetu: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    annualIncome: {
      type: DataTypes.STRING(225),
      allowNull: false,
    },
    foreignInterest: {
      type: DataTypes.ENUM("yes", "no"),
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
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE", "TERMINATED"),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

class userFollowing extends Model {}

userFollowing.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    following: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { sequelize: connection, freezeTableName: true }
);

export {
  user,
  userAuthentication,
  userDocs,
  userMeta,
  myfamily,
  userLogs,
  payment,
  horoscope,
  userPersonality,
  userDetails,
  whislist,
  partnerPreference,
  userFollowing,
};
