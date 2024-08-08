import { UUID } from "crypto";
import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";
import getGymId from "../gym/getGymId";
import { getUsersGym } from "../user/getUsersGym";
import { getOneUserId } from "../user/getOneUserId";

export default async function confirmChangeGymMail(idUser: UUID, idNewGym: UUID) {
    const user: any = await getOneUserId(idUser)
    const gym: any = await getGymId(idNewGym)
    const usersAdmins = await getUsersGym(gym.name)
    const adminEmails = usersAdmins
        .filter(user => user.admin)
        .map(admin => admin.email);


    await transporter.verify();
    let mail = null
    mail = {
        from: USER_APLICATION,
        to: adminEmails.length > 0 ? adminEmails.join(',') : usersAdmins[0],
        subject: `Nuevo usuario`,
        html: `
            <h1>
            Hola <b>${gym.name}</b>.
            </h1>
            <p>
            ${user.name} ${user.surname} quiere incorporarse a su gimnasio, ¿desea aceptar la solicitud? 
            </p>
            <a href='http://localhost:5173/acceptUser/${user.id}'>
                Aceptar
            </a>
            <footer>
            Saludos cordiales,
            El equipo de ${team}
            </footer>
            `
    }

    await transporter.sendMail(mail);
    return true
}