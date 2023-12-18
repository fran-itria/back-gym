import { getOneLoads } from "../../handlers/cargas/getOneLoads";
import { request, response } from "../../types";


export default async function getOneCargasController(req: request, res: response) {
    try {
        const loads = await getOneLoads(req.params.id)
        res.status(200).json(loads)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}