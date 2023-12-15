import { updateUser } from "../../handlers/user/updateUser";
import { request, response } from "../../types";

export default async function updateUserController(req: request, res: response) {
    try {
        const update = await updateUser(req.body)
        res.status(200).json(update)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}