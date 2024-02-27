import { postId } from "../../handlers/idRegistro/postId";
import { request, response } from "../../types";

export default async function postIdController(req: request, res: response) {
    try {
        const newId = await postId(req.body.gym)
        res.status(200).json(newId)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}