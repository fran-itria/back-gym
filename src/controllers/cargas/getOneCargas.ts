import { getOneCargas } from "../../handlers/cargas/getOneCargas";
import { request, response } from "../../types";


export default async function getOneCargasController(req: request, res: response) {
    try {
        const cargas = await getOneCargas(req.params.id)
        res.status(200).json(cargas)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}