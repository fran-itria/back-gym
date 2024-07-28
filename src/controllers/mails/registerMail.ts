import registerMail from "../../handlers/mails/registerMail";
import { request, response } from "../../types";

export default async function registerMailController(req: request, res: response) {
    try {
        const { admin, email, gym, name, temporalCode } = req.body
        await registerMail(admin, email, gym, name, temporalCode)
        res.status(200).json({ Mensaje: 'Correo enviado' })
    }
    catch (error) {
        console.error(error)
        res.status(404).json(error)
    }
}