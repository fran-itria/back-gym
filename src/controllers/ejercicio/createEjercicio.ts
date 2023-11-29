import { createEjercicio } from "../../handlers/ejercicio/createEjercicio";
import { request, response } from "../../types";

export default async function createEjercicioController(
  req: request,
  res: response
) {
  const { ejercicioName, series, repeticiones } = req.body;
  try {
    const newEjercicio = await createEjercicio({
      name: ejercicioName,
      series,
      repeticiones,
    });
    res.status(200).json(newEjercicio);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
