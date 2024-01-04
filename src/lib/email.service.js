import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { SMTPEmailService } from './smtp.email.service.js';

export class EmailService {

    constructor() {
        this._emailService = new SMTPEmailService(); // Hardcoded for now
    }

    async sendEmail (emailDetails, textBody){
        return await this._emailService.sendEmail(emailDetails, textBody);
    };

    async getTemplate(templateName){
        const cwd = process.cwd();
        const filePath = join(cwd, 'assets/email.templates/', templateName);
        if (!existsSync(filePath)) {
            throw new Error(`Template ${templateName} does not exist`);
        }
        const body = readFileSync(filePath, 'utf8');
        return body;
    };
}
