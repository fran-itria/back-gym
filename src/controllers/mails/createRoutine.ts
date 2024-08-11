import createRoutineMail from "../../handlers/mails/createRoutine";
import { request, response } from "../../types";


export default async function createRoutineMailController(req: request, res: response) {
    try {
        const { email, routine } = req.body
        await createRoutineMail(email, routine)
        res.status(200).json({ Mensaje: "Correo enviado" })
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: "No se pudo enviar el correo"})
    }
}