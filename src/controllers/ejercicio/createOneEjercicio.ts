import { createOneEjercicio } from "../../handlers/ejercicio/createOneEjercicio";
import { request, response } from "../../types";

export default async function createOneEjercicioController(
  req: request,
  res: response
) {
  const { ejercicioName, series, repeticiones } = req.body;
  try {
    const newEjercicio = await createOneEjercicio({
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
