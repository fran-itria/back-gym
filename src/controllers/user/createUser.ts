import createUser from "../../handlers/user/createUser";
import { request, response } from "../../types";

export default async function createUserController(req: request, res: response) {
    try {
        const newUser = await createUser(req.body)
        if (newUser) res.status(200).json(newUser)
    } catch (error) {
        if (error.errors[0].type == 'unique violation' && error.errors[0].path == 'user') {
            res.status(404).json({ Error: "Usuario ya registrado" })
        } else if (error.errors[0].type == 'unique violation' && error.errors[0].path == 'email') {
            res.status(404).json({ Error: "Email ya registrado" })
        } else res.status(404).json({ Error: error })
    }
}