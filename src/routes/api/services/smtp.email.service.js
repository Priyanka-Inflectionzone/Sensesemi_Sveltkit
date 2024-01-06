// import { createTransport } from 'nodemailer';
// const nodemailer = require('nodemailer')
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

////////////////////////////////////////////////////////////////////

// export class SMTPEmailService {

//     constructor() {
//         this._emailFrom = process.env.EMAIL_FROM;

//         this._options = {
//             host: process.env.SMTP_HOST,
//             port: parseInt(process.env.SMTP_PORT),
//             secure: false,
//             auth: {
//                 user: process.env.SMTP_USER,
//                 pass: process.env.SMTP_PASSWORD,
//             },
//             tls: {
//                 rejectUnauthorized: false,
//             },
//         };

//         this._transporter = createTransport(this._options);
//     }

//     async sendEmail(emailDetails, textBody){
//         try {
//             const mailOptions = {
//                 from: this._emailFrom,
//                 to: emailDetails.EmailTo,
//                 subject: emailDetails.Subject,
//             };

//             if (textBody) {
//                 mailOptions['text'] = emailDetails.Body;
//             } else {
//                 mailOptions['html'] = emailDetails.Body;
//             }

//             const info = await this._transporter.sendMail(mailOptions);
//             console.log('Email sent: ' + info.messageId);
//             return info.messageId || false;
//         } catch (error) {
//             console.log('Error occurred while sending email: ' + error.message);
//             throw new Error('Error occurred while sending email: ' + error.message);
//         }
//     };
// }

dotenv.config();

export const smtpService = async(emailDetails, textBody) => {
    try {
        const emailFrom = process.env.EMAIL_FROM;
        const options = {
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        };

        const transporter = nodemailer.createTransport(options);

        const mailOptions = {
            from: emailFrom,
            to: emailDetails.EmailTo,
            subject: emailDetails.Subject,
        };

        if (textBody) {
            mailOptions['text'] = emailDetails.Body;
        } else {
            mailOptions['html'] = emailDetails.Body;
        }

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.messageId);
        return info.messageId || false;
    } catch (error) {
        console.log('Error occurred while sending email: ' + error.message);
        throw new Error('Error occurred while sending email: ' + error.message);
    }
}
