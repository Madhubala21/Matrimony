// import nodemailer from "nodemailer";
import { mailerHost } from "../database/connection.js";
import ejs from "ejs";
import path from "path";
import * as Error from "../errors/ErrorConstant.js";
import { authentications } from "./jwt.js";
import require from "requirejs"
var CryptoJS = require("crypto-js");
var sendmail = require('sendmail')({
    devHost: 'localhost',
    devPort: 587
})
import dotenv from "dotenv";
dotenv.config();

const __dirname = path.resolve();
export class NodeMailerfunction { }



const mailTemplatefolder = path.join(__dirname, "./src/core/utils/mailTemplate/");

NodeMailerfunction.Email = {
    getStarted: async (data) => {
        const baseURL = configs.baseUrl;
        // const hexCode = data.uid;
        const recieverEmail = data.email;
        const userId = data.id;
        const userName = data.userName;
        const userStatus = data.status;
        //generate jwt
        const verifyToken = await authentications.generateEmailToken({ userId: userId, userName: userName, status: userStatus });

        const verifyurl = baseURL + "/getStarted/" + "?verifyEmail=" + verifyToken;
        if (recieverEmail != null && recieverEmail != undefined && recieverEmail.length != 0) {
            try {
                ejs.renderFile(mailTemplatefolder + "/getStarted.ejs", { username: userName, verify: verifyurl }, function (err, welcome) {
                    if (err) {
                        throw Error.SomethingWentWrong();
                    } else {
                        const mainOptions = {
                            from: "noreply@bioforhealth.com",
                            to: recieverEmail,
                            subject: `Welcome to ${process.env.APP_NAME} 🛍️ `,
                            html: welcome,
                            secure: false,
                        };
                        return sendmail(mainOptions);
                    }
                });
            } catch (error) {
                throw Error.SomethingWentWrong();
            }
        } else {
            throw Error.SomethingWentWrong();
        }
    },
    codeForForgotpassword: async (data) => {
        const hexCode = data.code;
        const recieverEmail = data.email;
        try {
            ejs.renderFile(mailTemplatefolder + "/resetPassword.ejs", { code: hexCode }, async function (err, resetPassword) {
                if (err) {
                    throw Error.SomethingWentWrong();
                } else {
                    const mainOptions = {
                        from: "noreply@bioforhealth.com",
                        to: recieverEmail,
                        subject: `Reset Password for ${process.env.APP_NAME} 🔑 🛍️ `,
                        html: resetPassword,
                        secure: false,
                    };
                    sendmail(mainOptions);
                }
            });
        } catch (error) {
            throw Error.SomethingWentWrong();
        }
    },
};