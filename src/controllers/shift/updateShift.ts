import { updateShift } from "../../handlers/shift/updateShift";
import { request, response } from "../../types";

export default async function updateShiftController(req: request, res: response) {
    try {
        const shift = await updateShift(req.body)
        res.status(200).json(shift)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}