import { USER_APLICATION } from "../../config";
import { User } from "../../db";
import transporter from "../../nodemailer/nodemailer";
import fs from 'fs';
import path from 'path';


export default async function banUserMail(email: string, ban: string, gym: string) {
    const user: any = await User.findOne({ where: { email } })
    await transporter.verify()
    const htmlTemplate = fs.readFileSync(path.join(__dirname, './html/ban.html'), 'utf8');
    const htmlContent = htmlTemplate
        .replace('{ban}', ban)
        .replace('{gym}', gym)
        .replace('{gym}', gym)
        .replace('{gym}', gym)
        .replace('{name}', user.name)
        .replace('{surname}', user.surname)

    const mail = {
        from: USER_APLICATION,
        to: email,
        subject: 'Baneo de cuenta',
        html: htmlContent
    }
    await transporter.sendMail(mail)
    return true
}