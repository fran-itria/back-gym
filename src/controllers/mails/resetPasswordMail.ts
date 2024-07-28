import resetPassword from "../../handlers/mails/resetPasswordMail";
import { request, response } from "../../types";


export default async function resetPasswordMailController(req: request, res: response) {
    try {
        const { email, user } = req.body
        await resetPassword(email, user)
        res.status(200).json({ Mensaje: "Correo enviado" })
    } catch (error) {
        res.status(404).json(error)
    }
}