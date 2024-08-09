import confimrChangeGymUser from "../../handlers/mails/confirmChangeGymUser";
import { request, response } from "../../types";


export default async function confirmChangeGymUserMailController(req: request, res: response) {
    try {
        const { user, email, gym } = req.body
        await confimrChangeGymUser(user, email, gym)
        res.status(200).json({ Mensaje: "Correo enviado" })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}