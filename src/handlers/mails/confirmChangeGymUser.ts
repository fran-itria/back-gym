import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";

export default async function confimrChangeGymUser(user: string, email: string, gym: string) {
    await transporter.verify();
    let mail = null
    mail = {
        from: USER_APLICATION,
        to: email,
        subject: `Nuevo usuario`,
        html: `
            <h1>
            Hola <b>${user}</b>.
            </h1>
            <p>
            ${gym} ha aceptado su solicitud de incorporación, ya puedes iniciar sesión en la web 
            </p>
            <footer>
            Saludos cordiales,
            El equipo de ${team}
            </footer>
            `
    }
    await transporter.sendMail(mail);
    return true
}