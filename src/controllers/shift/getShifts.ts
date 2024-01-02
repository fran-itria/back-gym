import { getShift } from "../../handlers/shift/getShift";
import { request, response } from "../../types";

export default async function getShiftsController(_req: request, res: response) {
    try {
        const shifts = await getShift()
        res.status(200).json(shifts)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}