import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import {smtpService}  from './smtp.email.service.js';

export const emailService = async(emailDetails, textBody) => {
    return await smtpService(emailDetails, textBody)
}