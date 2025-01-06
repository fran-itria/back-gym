import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";
import fs from 'fs';
import path from 'path';

export default async function confimrChangeGymUser(user: string, email: string, gym: string) {
    await transporter.verify();

    const htmlTemplate = fs.readFileSync(path.join(__dirname, './html/confirmChangeUser.html'), 'utf8');
    const htmlContent = htmlTemplate
        .replace('{gym}', gym)
        .replace('{user}', user)
        .replace('{team}', team)
    let mail = null
    mail = {
        from: USER_APLICATION,
        to: email,
        subject: `Cambiado de gimnasio`,
        html: htmlContent
    }
    await transporter.sendMail(mail);
    return true
}