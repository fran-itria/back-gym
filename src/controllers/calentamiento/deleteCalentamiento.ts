import deleteCalentamiento from "../../handlers/calentamiento/deleteCalentamiento";
import { request, response } from "../../types";

export default async function deleteCalentamientoController(req: request, res: response) {
    try {
        await deleteCalentamiento(req.body.id)
        res.status(200).json({ Message: 'Calentamiento eliminado correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}