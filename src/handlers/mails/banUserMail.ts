import { USER_APLICATION } from "../../config";
import { User } from "../../db";
import transporter from "../../nodemailer/nodemailer";



export default async function banUserMail(email: string, ban: string, gym: string) {
    const user: any = await User.findOne({ where: { email } })
    await transporter.verify()


    const mail = {
        from: USER_APLICATION,
        to: email,
        subject: 'Baneo de cuenta',
        html: `
            <div style="
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
                margin: 0;
                padding: 0;
            ">
                Estimado/a <b>${user.name} ${user.surname} </b>, <br>
                Esperamos que este mensaje le encuentre bien. <br>
                Le escribimos para informarle que su cuenta en ${gym} ha sido suspendida debido a la siguiente razón: <br>
                <b style="color: red">${ban}</b> <br>
                Si considera que se ha cometido un error o desea apelar esta decisión, le solicitamos que se ponga <br>
                en contacto con nosotros a través de un entrenador o administrador de <b>${gym}</b>. <br>
                Le agradecemos su comprensión y colaboración en este asunto. <br>
                Atentamente, <b>${gym}</b>. 
            </div>
        `
    }
    await transporter.sendMail(mail)
    return true
}