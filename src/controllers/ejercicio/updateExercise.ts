import { updateExercise } from "../../handlers/ejercicio/updateExercise";
import { request, response } from "../../types";

export default async function updateExerciseController(req: request, res: response) {
    try {
        const updateExercies = await updateExercise(req.body)
        res.status(200).json(updateExercies)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}