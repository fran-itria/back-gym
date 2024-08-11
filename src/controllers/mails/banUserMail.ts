import banUserMail from "../../handlers/mails/banUserMail";
import { request, response } from "../../types";


export default async function banUserMailController(req: request, res: response) {
    try {
        const { email, ban, gym } = req.body
        await banUserMail(email, ban, gym)
        res.status(200).json({ Mensaje: "Correo enviado" })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}