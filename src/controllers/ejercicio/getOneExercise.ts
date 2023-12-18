import { getOneExercise } from "../../handlers/ejercicio/getOneExercise";
import { request, response } from "../../types";

export default async function getOneExerciseController(req: request, res: response) {
    try {
        const ejercicios = await getOneExercise(req.params.id);
        res.status(200).json(ejercicios);
    } catch (error) {
        console.log(error);
        res.status(404).json({ Error: error.message });
    }
}
