import { USER_APLICATION } from "../../config";
import transporter from "../../nodemailer/nodemailer";
import { team } from "../../routes/mail";

export default async function registerMail(admin: boolean, email: string, gym: string | null, name: string, temporalCode: number) {
    await transporter.verify();

    let mail = null
    if (admin) {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: `Registro exitoso`,
            html: `
                <h1 style="color: #333;">
                    Hola <b>${name}</b>, bienvenido a <b>${team}</b>.
                </h1>
                <p>
                    Estamos encantados de tenerte con nosotros. A partir de ahora, podrás disfrutar de 
                    todas las características y beneficios que ofrecemos. Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
                </p>
                <p>
                    Para comenzar, necesitamos que verifiques tu cuenta colocando el siguiente codigo <b>${temporalCode}</b>.
                </p>
                <p>
                    ¡Esperamos que disfrutes de tu experiencia con nosotros!
                </p>
                <footer style="margin-top: 20px; color: #777;">
                    Saludos cordiales,
                    El equipo de <b>${team}</b>
                </footer>
            `
        }
    }
    else {
        mail = {
            from: USER_APLICATION,
            to: email,
            subject: `Registro exitoso`,
            html: `
                <h1 style="color: #333;">
                    Hola <b>${name}</b>, bienvenido a <b>${gym}</b>.
                </h1>
                <p>
                    Estamos encantados de tenerte con nosotros. A partir de ahora, podrás disfrutar de 
                    todas las características y beneficios que ofrecemos. Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.
                </p>
                <p>
                    Para comenzar, necesitamos que verifiques tu cuenta colocando el siguiente codigo: <b>${temporalCode}</b>.
                </p>
                <p>
                    ¡Esperamos que disfrutes de tu experiencia con nosotros!
                </p>
                <footer style="margin-top: 20px; color: #777">
                    Saludos cordiales,
                    El equipo de <b>${team}</b>
                </footer>           
            `
        }
    }
    await transporter.sendMail(mail);
    return true
}