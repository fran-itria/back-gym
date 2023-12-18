import { createWarmUp } from "../../handlers/calentamiento/createWarmUp";
import { request, response } from "../../types";

export default async function createWarmUpController(req: request, res: response) {
    try {
        const newCalentamiento = await createWarmUp(req.body)
        res.status(200).json(newCalentamiento)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }

}