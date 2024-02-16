import { deleteDay } from "../../handlers/day/deleteDay";
import { request, response } from "../../types";

export default async function deleteDayController(req: request, res: response) {
    try {
        await deleteDay(req.params.id)
        res.status(200).json({ Message: 'Día eliminado correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}