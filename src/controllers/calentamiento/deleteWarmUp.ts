import deleteWarmUp from "../../handlers/calentamiento/deleteWarmUp";
import { request, response } from "../../types";

export default async function deleteWarmUpController(req: request, res: response) {
    try {
        await deleteWarmUp(req.params.id)
        res.status(200).json({ Message: 'Calentamiento eliminado correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}