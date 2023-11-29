import getOneGymName from "../../handlers/gym/getOneGymName";
import { request, response } from "../../types";

export default async function getOneGymNameController(req: request, res: response) {
    const { gymName } = req.params
    try {
        const gym = await getOneGymName(gymName)
        res.status(200).json(gym)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}