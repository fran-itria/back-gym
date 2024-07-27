import getOneUserEmail from "../../handlers/user/getOneUserEmail";
import { request, response } from "../../types";

export default async function getOneUserEmailController(
    req: request,
    res: response
) {
    const { email } = req.params;
    try {
        const user = await getOneUserEmail(email);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ Error: error.message });
    }
}
