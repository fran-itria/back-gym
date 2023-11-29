import getUsers from "../../handlers/user/getUsers";
import { request, response } from "../../types";

export default async function getUsersController(_req: request, res: response) {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}