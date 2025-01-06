import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";

export default async function resetPassword(email: string, user: string, code: number) {
    await transporter.verify();

    const mail = {
        from: USER_APLICATION,
        to: email,
        subject: `Cambio de contraseña`,
        html: `
        <h1 style="color: #333;">
            Hola <b>${user}</b>.
        </h1>
        <p>
            Has solicitado un cambio de contraseña. Su código para restaruar la contraseña es:
        </p>
        <b>${code}</b>
        <footer style="margin-top: 20px; color: #777;">
            Saludos cordiales,
            El equipo de ${team}
        </footer>`
    }

    await transporter.sendMail(mail);
    return true
}