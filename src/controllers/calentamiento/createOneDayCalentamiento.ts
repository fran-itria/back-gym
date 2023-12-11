import { createOneDayCalentamiento } from "../../handlers/calentamiento/createOneDayCalentamiento";
import { request, response } from "../../types";

export default async function createOneDayCalentamientoController(req: request, res: response) {
    try {
        const newCalentamiento = await createOneDayCalentamiento(req.body)
        res.status(200).json(newCalentamiento)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}