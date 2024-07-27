import { deleteUser } from "../../handlers/user/deleteUser";
import { request, response } from "../../types";

export default async function deleteUserController(
    req: request,
    res: response
) {
    const { id } = req.params;
    try {
        const user = await deleteUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ Error: error.message });
    }
}
