import { UUID } from "crypto";
import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";
import getGymId from "../gym/getGymId";
import { getUsersGym } from "../user/getUsersGym";
import { getOneUserId } from "../user/getOneUserId";
import fs from 'fs';
import path from 'path';

export default async function confirmChangeGymMail(idUser: UUID, idNewGym: UUID) {
    const user: any = await getOneUserId(idUser)
    const gym: any = await getGymId(idNewGym)
    const usersAdmins = await getUsersGym(gym.name)
    const adminEmails = usersAdmins
        .filter(user => user.admin)
        .map(admin => admin.email);

    const htmlTemplate = fs.readFileSync(path.join(__dirname, './html/confirmChange.html'), 'utf8');
    const htmlContent = htmlTemplate
        .replace('{gym}', gym.name)
        .replace('{name}', user.name)
        .replace('{surname}', user.surname)
        .replace('{user.id}', user.id)
        .replace('{gym.id}', gym.id)
        .replace('{team}', team)

    await transporter.verify();
    let mail = null
    mail = {
        from: USER_APLICATION,
        to: adminEmails.length > 0 ? adminEmails.join(',') : usersAdmins[0],
        subject: `Nuevo usuario`,
        html: htmlContent
    }
    await transporter.sendMail(mail);
    return true
}