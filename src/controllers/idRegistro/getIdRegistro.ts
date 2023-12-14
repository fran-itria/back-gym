import { getIdRegistro } from "../../handlers/idRegistro/getIdRegistro";
import { request, response } from "../../types";


export default async function getAllIdRegistroController(_req: request, res: response) {
    try {
        const allId = await getIdRegistro()
        res.status(200).json(allId)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}