import { getOneId } from "../../handlers/idRegistro/getOneId";
import { request, response } from "../../types";

export default async function getOneIdController(req: request, res: response) {
    try {
        const id = await getOneId(req.params.id)
        res.status(200).json(id)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}