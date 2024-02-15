import getOneDay from "../../handlers/day/getOneDay";
import { request, response } from "../../types";

export default async function getOneDayController(req: request, res: response) {
    try {
        const day = await getOneDay(req.params.id)
        res.status(200).json(day)
    } catch (error) {
        res.status(404).json({ Error: error.message })
    }
}