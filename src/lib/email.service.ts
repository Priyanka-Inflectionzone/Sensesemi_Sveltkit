import path from "path";
import fs from "fs";
import { IEmailService } from "./email.service.interface";
import { SMTPEmailService } from "./smtp.email.service";
import { EmailDetails } from "./email.details";

export class EmailService {

    private _emailService: IEmailService;

    constructor() {
        this._emailService = new SMTPEmailService();
    }

    sendEmail = async (emailDetails: EmailDetails, textBody: boolean): Promise<boolean> => {
        return await this._emailService.sendEmail(emailDetails, textBody);
    };
}
