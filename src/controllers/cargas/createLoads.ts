import { createLoads } from "../../handlers/cargas/createCargas";
import { request, response } from "../../types";


export default async function createLoadsController(req: request, res: response) {
    try {
        const newCarga = await createLoads(req.body)
        res.status(200).json(newCarga)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}