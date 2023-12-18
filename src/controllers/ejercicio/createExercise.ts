import { createExercises } from "../../handlers/ejercicio/createExercises";
import { request, response } from "../../types";

export default async function createExercisesController(req: request, res: response) {
    const { dias } = req.body
    try {
        const ejercicios = await createExercises(dias)
        res.status(200).json(ejercicios)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}