import { postId } from "../../handlers/idRegistro/postId";
import { request, response } from "../../types";

export default async function postIdController(_req: request, res: response) {
    try {
        const newId = await postId()
        res.status(200).json(newId)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}