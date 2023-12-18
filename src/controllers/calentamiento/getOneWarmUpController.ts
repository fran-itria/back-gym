import getOneWarmUp from "../../handlers/calentamiento/getOneWarmUp";
import { request, response } from "../../types";

export default async function getOneWarmUpController(req: request, res: response) {
    try {
        const calentamientos = await getOneWarmUp(req.params.id)
        res.status(200).json(calentamientos)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}