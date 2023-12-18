import getRoutine from "../../handlers/rutina/getRoutine";
import { request, response } from "../../types";

export default async function getRoutineController(_req: request, res: response) {
    try {
        const rutinas = await getRoutine()
        res.status(200).json(rutinas)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}