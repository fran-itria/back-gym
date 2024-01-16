
import { createOneDayWarmUp } from "../../handlers/calentamiento/createOneDayWarmUp";
import { request, response } from "../../types";

export default async function createOneDayWarmUpController(req: request, res: response) {
    try {
        const newCalentamiento = await createOneDayWarmUp(req.body)
        res.status(200).json(newCalentamiento)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}