import getOneRoutine from "../../handlers/rutina/getOneRoutine";
import { request, response } from "../../types";

export default async function getOneRoutineController(req: request, res: response) {
    try {
        const rutina = await getOneRoutine(req.params.id)
        res.status(200).json(rutina)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}