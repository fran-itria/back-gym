import { deleteLoads } from "../../handlers/cargas/deleteLoads";
import { request, response } from "../../types";


export default async function deleteLoadsController(req: request, res: response) {
    try {
        await deleteLoads(req.body.id)
        res.status(200).json({ Message: 'Carga eliminada correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}