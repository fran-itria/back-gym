import getShiftDay from "../../handlers/shift/getShiftDay";
import { request, response } from "../../types";

export default async function getShiftDayController(req: request, res: response) {
    try {
        const shifts = await getShiftDay(req.params)
        res.status(200).json(shifts)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}