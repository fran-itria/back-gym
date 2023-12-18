import { deleteCargas } from "../../handlers/cargas/deleteCargas";
import { request, response } from "../../types";


export default async function deleteCargasController(req: request, res: response) {
    try {
        await deleteCargas(req.body.id)
        res.status(200).json({ Message: 'Carga eliminada correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}