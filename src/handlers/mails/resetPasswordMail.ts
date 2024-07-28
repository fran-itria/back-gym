import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";

export default async function resetPassword(email: string, user: string) {
    await transporter.verify();
    let mail = null
    mail = {
        from: USER_APLICATION,
        to: email,
        subject: `Cambio de contraseña`,
        html: `
            <h1>
            Hola <b>${user}</b>.
            </h1>
            <p>
            Su cambio de contraseña se ha realizado con exito, te recordamos el <b>user</b> y ya podrás iniciar sesion en la web
            </p>
            <p>Vuelve a la web e inicia sesión</p>
            <a href='http://localhost:5173/'>
                Iniciar sesión
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