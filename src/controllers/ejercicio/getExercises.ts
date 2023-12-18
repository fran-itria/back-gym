import { getExercises } from "../../handlers/ejercicio/getExercise";
import { request, response } from "../../types";

export default async function getExercisesController(
  _req: request,
  res: response
) {
  try {
    const ejercicios = await getExercises();
    res.status(200).json(ejercicios);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
