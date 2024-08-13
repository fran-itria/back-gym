import resetPassword from "../../handlers/mails/resetPasswordMail";
import { request, response } from "../../types";


export default async function resetPasswordMailController(req: request, res: response) {
    try {
        const { email, user, code } = req.body
        await resetPassword(email, user, code)
        res.status(200).json({ Mensaje: "Correo enviado" })
    } catch (error) {
        res.status(404).json(error)
    }
}