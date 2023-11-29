import { getEjercicios } from "../../handlers/ejercicio/getEjercicios";
import { request, response } from "../../types";

export default async function getEjerciciosController(
  _req: request,
  res: response
) {
  try {
    const ejercicios = await getEjercicios();
    res.status(200).json(ejercicios);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
