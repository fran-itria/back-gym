import getOneRutina from "../../handlers/rutina/getOneRutina";
import { request, response } from "../../types";

export default async function getOneRutinaController(req: request, res: response) {
    try {
        const rutina = await getOneRutina(req.params.id)
        res.status(200).json(rutina)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}