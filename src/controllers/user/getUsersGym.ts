import { getUsersGym } from "../../handlers/user/getUsersGym";
import { request, response } from "../../types";

export default async function getUsersGymController(req: request, res: response) {
    try {
        const users = await getUsersGym(req.params.gymName);
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(404).json({ Error: error.message });
    }
}
