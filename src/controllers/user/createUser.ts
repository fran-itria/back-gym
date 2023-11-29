import createUser from "../../handlers/user/createUser";
import { request, response } from "../../types";

export default async function createUserController(req: request, res: response) {
    try {
        const newUser = await createUser(req.body)
        if (newUser) res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}