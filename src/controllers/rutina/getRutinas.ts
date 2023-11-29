import getRutinas from "../../handlers/rutina/getRutinas";
import { request, response } from "../../types";

export default async function getRutinasController(_req: request, res: response) {
    try {
        const rutinas = await getRutinas()
        res.status(200).json(rutinas)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}