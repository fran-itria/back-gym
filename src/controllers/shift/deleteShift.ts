import { deleteShift } from "../../handlers/shift/deleteShift";
import { request, response } from "../../types";

export default async function deleteShiftController(req: request, res: response) {
    try {
        await deleteShift(req.body.id)
        res.status(200).json("Turno eliminado exitosamente")
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}