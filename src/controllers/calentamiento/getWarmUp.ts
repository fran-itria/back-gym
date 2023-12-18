import { getWarmUps } from "../../handlers/calentamiento/getWarmUps";
import { request, response } from "../../types";

export default async function getWarmUpController(_req: request, res: response) {
    try {
        const calentamientos = await getWarmUps()
        res.status(200).json(calentamientos)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}