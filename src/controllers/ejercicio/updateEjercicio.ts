import { updateEjercicio } from "../../handlers/ejercicio/updateEjercicio";
import { request, response } from "../../types";

export default async function updateEjercicioController(req: request, res: response) {
    try {
        const updateExercies = await updateEjercicio(req.body)
        res.status(200).json(updateExercies)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}