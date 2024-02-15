import updateRutina from "../../handlers/rutina/updateRutina";
import { request, response } from "../../types";

export default async function updateRutinaController(req: request, res: response) {
    try {
        const routine = await updateRutina(req.body)
        res.status(200).json(routine)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}