import { logout } from "../../handlers/user/logout";
import { request, response } from "../../types";

export default async function logoutController(req: request, res: response) {
    try {
        await logout(req.body.id)
        res.status(200).json("Has cerrado sesión correctamente")
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}