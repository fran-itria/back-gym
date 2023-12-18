import { updateCargas } from "../../handlers/cargas/updateCargas";
import { request, response } from "../../types";


export default async function updateCargasController(req: request, res: response) {
    try {
        const changeCaras = await updateCargas(req.body)
        res.status(200).json(changeCaras)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}