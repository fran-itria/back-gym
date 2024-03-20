import { changeGym } from "../../handlers/user/changeGym";
import { request, response } from "../../types";

export default async function changeGymController(req: request, res: response) {
    try {
        const user = await changeGym(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}