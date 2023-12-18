import { createOneDayRoutine } from "../../handlers/rutina/createOneDayRoutine";
import { request, response } from "../../types";

export default async function createOneDayRoutineController(
  req: request,
  res: response
) {
  try {
    const newRutina = await createOneDayRoutine(req.body);
    res.status(200).json(newRutina);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
