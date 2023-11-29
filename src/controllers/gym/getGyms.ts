import getGyms from "../../handlers/gym/getGyms";
import { request, response } from "../../types";

export default async function getGymsController(_req: request, res: response) {
    try {
        const gyms = await getGyms()
        res.status(200).json(gyms)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}