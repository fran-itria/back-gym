import getGymId from "../../handlers/gym/getGymId";
import { request, response } from "../../types";

export default async function getGymIdController(req: request, res: response) {
    const { id } = req.params
    try {
        const gym = await getGymId(id)
        res.status(200).json(gym)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}