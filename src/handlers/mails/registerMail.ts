import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";
import fs from 'fs';
import path from 'path';

export default async function registerMail(admin: boolean, email: string, gym: string | null, name: string, temporalCode: number) {
    await transporter.verify();

    const htmlTemplate = fs.readFileSync(path.join(__dirname, admin ? './html/registerAdmin.html' : './html/registerUser.html'), 'utf8');
    const htmlContent = htmlTemplate
        .replace('{name}', name)
        .replace('{gym}', gym)
        .replace('{temporalCode}', temporalCode.toString())
        .replace('{team}', team)
        .replace('{team}', team)

    let mail = null
    if (admin) {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: `Registro exitoso`,
            html: htmlContent
        }
    }
    else {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: `Registro exitoso`,
            html: htmlContent
        }
    }
    await transporter.sendMail(mail);
    return true
}