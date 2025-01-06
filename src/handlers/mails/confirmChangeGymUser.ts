import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";


export default async function confimrChangeGymUser(user: string, email: string, gym: string) {
    await transporter.verify();

    let mail = null
    mail = {
        from: USER_APLICATION,
        to: email,
        subject: `Cambiado de gimnasio`,
        html: `
        <div style="
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
                margin: 0;
                padding: 0;
            ">
        <h1 style="color: #333">
            Hola <b>${user}</b>.
        </h1>
        <p>
            <b>${gym}</b> ha aceptado su solicitud de incorporación, ya puedes iniciar sesión en la web 
        </p>
        <footer style="margin-top: 20px; color: #333;">
            Saludos cordiales,
            El equipo de <b>${team}</b>
        </footer>
        </div>
        `
    }
    await transporter.sendMail(mail);
    return true
}