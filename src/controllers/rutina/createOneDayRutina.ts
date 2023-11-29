import { createOneDayRutina } from "../../handlers/rutina/createOneDayRutina";
import { request, response } from "../../types";

export default async function createOneDayRutinaController(
  req: request,
  res: response
) {
  try {
    const newRutina = await createOneDayRutina(req.body);
    res.status(200).json(newRutina);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
