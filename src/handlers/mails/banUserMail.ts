import { USER_APLICATION } from "../../config";
import { User } from "../../db";
import transporter from "../../nodemailer/nodemailer";


export default async function banUserMail(email: string, ban: string, gym: string){
    const user: any = await User.findOne({where: {email}})
    await transporter.verify()
    const mail = {
        from: USER_APLICATION,
        to: email,
        subject: 'Baneo de cuenta',
        html: `
        Estimado/a ${user.name} ${user.surname}, <br>
        Esperamos que este mensaje le encuentre bien. <br>
        Le escribimos para informarle que su cuenta en ${gym} ha sido baneada debido a: <br>
        <b>${ban}</b> <br>
        Si considera que se ha cometido un error o desea apelar esta decisión, por favor, póngase en contacto con nosotros a través de <br>
        un entrenador o administrador de ${gym}. <br>
        Le agradecemos su comprensión y colaboración en este asunto. <br>
        Atentamente, ${gym}. 
        `
    }
    await transporter.sendMail(mail)
    return true
}