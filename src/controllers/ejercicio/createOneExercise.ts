import { createOneExercise } from "../../handlers/ejercicio/createOneExercise";
import { request, response } from "../../types";

export default async function createOneExerciseController(
  req: request,
  res: response
) {
  const { exercise, exerciseName, series, reps, link, dayId } = req.body;
  try {
    const newEjercicio = await createOneExercise({
      exercise,
      name: exerciseName,
      series,
      reps,
      link,
      dayId
    });
    res.status(200).json(newEjercicio);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}

/*

  Tengo que acceder al dia que le quiero agregar un ejercicio,
  crear el ejercicio y asociarlo al día correspondiente 

*/