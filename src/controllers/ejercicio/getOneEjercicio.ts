import { getOneEjercicio } from "../../handlers/ejercicio/getOneEjercicio";
import { request, response } from "../../types";

export default async function getOneEjerciciosController(req: request, res: response) {
    try {
        const ejercicios = await getOneEjercicio(req.params.id);
        res.status(200).json(ejercicios);
    } catch (error) {
        console.log(error);
        res.status(404).json({ Error: error.message });
    }
}
