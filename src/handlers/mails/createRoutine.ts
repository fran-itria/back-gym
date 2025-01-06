import { USER_APLICATION } from "../../config";
import { User } from "../../db";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";
import fs from 'fs';
import path from 'path';

const calentamiento = 'calentamiento'

export default async function createRoutineMail(email: string, routine: string) {
    await transporter.verify()
    const user: any = await User.findOne({
        where: {
            email
        }
    })

    const htmlTemplate = fs.readFileSync(path.join(
        __dirname, routine == calentamiento
        ?
        './html/newRoutine.html'
        :
        './html/newWarmUp.html'
    ), 'utf8')
    const htmlContent = htmlTemplate
        .replace('{name}', user.name)
        .replace('{surname}', user.surname)
        .replace('{team}', team)

    let mail = null
    if (routine == calentamiento) {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: 'Calentamiento creado',
            html: htmlContent
        }
    } else {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: 'Rutina creada',
            html: htmlContent
        }
    }

    await transporter.sendMail(mail);
    return true
}