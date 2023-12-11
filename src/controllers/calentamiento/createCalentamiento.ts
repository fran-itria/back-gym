import { createCalentamiento } from "../../handlers/calentamiento/createCalentamiento";
import { request, response } from "../../types";

export default async function createCalentamientoController(req: request, res: response) {
    try {
        const newCalentamiento = await createCalentamiento(req.body)
        res.status(200).json(newCalentamiento)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }

}