import { createRutinaOneDay } from "../../handlers/rutina/createRutina";
import { request, response } from "../../types";

export default async function createRutinaOneDayController(
  req: request,
  res: response
) {
  try {
    const newRutina = await createRutinaOneDay(req.body);
    res.status(200).json(newRutina);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
