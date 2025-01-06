import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";
import fs from 'fs';
import path from 'path';

export default async function resetPassword(email: string, user: string, code: number) {
    await transporter.verify();
    const htmlTemplate = fs.readFileSync(path.join(__dirname, './html/resetPassword.html'), 'utf8');
    const htmlContent = htmlTemplate
        .replace('{user}', user)
        .replace('{code}', code.toLocaleString())
        .replace('{team}', team)

    const mail = {
        from: USER_APLICATION,
        to: email,
        subject: `Cambio de contraseña`,
        html: htmlContent
    }

    await transporter.sendMail(mail);
    return true
}