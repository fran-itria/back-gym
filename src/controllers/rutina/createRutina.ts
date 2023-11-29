import { createRutina } from "../../handlers/rutina/createRutina";
import { request, response } from "../../types";

export default async function createRutinaController(
  req: request,
  res: response
) {
  try {
    const newRutina = await createRutina(req.body);
    res.status(200).json(newRutina);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
