import { deleteId } from "../../handlers/idRegistro/deleteId";
import { request, response } from "../../types";

export default async function deleteIdController(req: request, res: response) {
    try {
        await deleteId(req.body.id)
        res.status(200).json({ Message: 'Id eliminado correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}