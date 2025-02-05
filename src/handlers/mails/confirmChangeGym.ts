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
            <div style="
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
                margin: 0;
                padding: 0;
            ">
                <h1 style="color: #333">
                    Hola <b>${gym}</b>.
                </h1>
                <p style="
                    margin: 0;
                    padding: 0;
                ">
                    <b>${user.name} ${user.surname}</b> quiere incorporarse a su gimnasio
                </p>
                <p>
                    ¿Desea aceptar la solicitud? 
                </p>
                <a href='https://proactivecenter.com.ar/acceptUser?userId=${user.id}&gymId=${gym.id}'
                    style="
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: fit-content;
                        padding-left: 3px;
                        padding-right: 3px;
                        font-size: 1em;
                        font-weight: 500;
                        font-family: inherit;
                        background-color: #d1d5db;
                        color: #1f2937;
                        border: solid 2px black;
                        cursor: pointer;
                        transition: ease-in-out 500ms;
                        text-decoration: none;
                ">
                    Aceptar
                </a>
                <br>
                <footer style="margin-top: 20px; color: #333;">
                    Saludos cordiales,
                    El equipo de ${team}
                </footer>
            </div>
        `
    }
    await transporter.sendMail(mail);
    return true
}