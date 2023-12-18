import { createRoutine } from "../../handlers/rutina/createRoutine";
import { request, response } from "../../types";

export default async function createRoutineController(req: request, res: response) {
    try {
        const newRutina = await createRoutine(req.body)
        res.status(200).json(newRutina)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}