import createUser from "../../handlers/user/createUser";
import { request, response } from "../../types";

export default async function createUserController(req: request, res: response) {
    try {
        const newUser = await createUser(req.body)
        if (newUser) res.status(200).json(newUser)
    } catch (error) {
        if (error.message.includes('Users_user')) {
            res.status(404).json({ Error: "Ya existe ese usuario" })
        } else if (error.message.includes('Users_email')) {
            res.status(404).json({ Error: "Email ya registrado" })
        } else res.status(404).json({ Error: error.message })
    }
}