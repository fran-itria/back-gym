import { loginUser } from "../../handlers/user/loginUser";
import { request, response } from "../../types";

export default async function loginUserController(req: request, res: response) {
    try {
        const user = await loginUser(req.body)
        res.status(200).json({ Message: `Has iniciado sesión correctamente`, user })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}