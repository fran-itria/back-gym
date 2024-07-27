import getOneUserDni from "../../handlers/user/getOneUserDni";
import { request, response } from "../../types";

export default async function getOneUserDniController(
    req: request,
    res: response
) {
    const { dni } = req.params;
    try {
        const user = await getOneUserDni(dni);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ Error: error.message });
    }
}
