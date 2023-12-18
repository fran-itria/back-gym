import { getLoads } from "../../handlers/cargas/getLoads";
import { request, response } from "../../types";


export default async function getLoadsController(_req: request, res: response) {
    try {
        const cargas = await getLoads()
        res.status(200).json(cargas)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}