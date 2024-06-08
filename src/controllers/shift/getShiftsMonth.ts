import getShiftsMonth from "../../handlers/shift/getShiftsMonth"
import { request, response } from "../../types"

export default async function getShiftsMonthController(req: request, res: response) {
    try {
        const shifts = await getShiftsMonth(req.params)
        res.status(200).json(shifts)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}