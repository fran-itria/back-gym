import { getCalentamientos } from "../../handlers/calentamiento/getCalentamientos";
import { request, response } from "../../types";

export default async function getCalentamientosController(_req: request, res: response) {
    try {
        const calentamientos = await getCalentamientos()
        res.status(200).json(calentamientos)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}