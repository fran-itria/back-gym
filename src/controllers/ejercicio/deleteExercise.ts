import deleteExercise from "../../handlers/ejercicio/deleteExercise";
import { request, response } from "../../types";

export default async function deleteExerciseController(req: request, res: response) {
    try {
        console.log(req.params.id)
        await deleteExercise(req.params.id)
        res.status(200).json({ Message: 'Ejercicio borrado exitosamente' })
    } catch (error) {

    }
}