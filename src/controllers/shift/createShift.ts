import { createShift } from "../../handlers/shift/createShift";
import { request, response } from "../../types";

export default async function createShiftController(req: request, res: response) {
    try {
        const newShift = await createShift(req.body)
        res.status(200).json(newShift)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}