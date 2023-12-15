import deleteRutina from "../../handlers/rutina/deleteRutina";
import { request, response } from "../../types";

export default async function deleteRutinaController(req: request, res: response) {
    try {
        await deleteRutina(req.body.id)
        res.status(200).json({ Message: 'Rutina eliminada correctamete' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}