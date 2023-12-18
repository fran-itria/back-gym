import deleteRoutine from "../../handlers/rutina/deleteRoutine";
import { request, response } from "../../types";

export default async function deleteRoutineController(req: request, res: response) {
    try {
        await deleteRoutine(req.body.id)
        res.status(200).json({ Message: 'Rutina eliminada correctamete' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}