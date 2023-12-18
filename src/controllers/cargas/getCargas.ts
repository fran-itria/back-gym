import { getCargas } from "../../handlers/cargas/getCargas";
import { request, response } from "../../types";


export default async function getCargasController(_req: request, res: response) {
    try {
        const cargas = await getCargas()
        res.status(200).json(cargas)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}