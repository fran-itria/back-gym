import { updateLoads } from "../../handlers/cargas/updateLoads";
import { request, response } from "../../types";


export default async function updateLoadsController(req: request, res: response) {
    try {
        const changeCaras = await updateLoads(req.body)
        res.status(200).json(changeCaras)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}