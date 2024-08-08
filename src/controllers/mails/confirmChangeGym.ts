import confirmChangeGymMail from "../../handlers/mails/confirmChangeGym";
import { request, response } from "../../types";


export default async function confirmChangeGymMailController(req: request, res: response) {
    try {
        const { idUser, idNewGym } = req.body
        await confirmChangeGymMail(idUser, idNewGym)
        res.status(200).json({ Mensaje: "Correo enviado" })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}