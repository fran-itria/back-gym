import updateGym from "../../handlers/gym/updateGym";
import { request, response } from "../../types";

export default async function updateGymController(req: request, res: response){
    try {
        const gym = await updateGym(req.body)
        res.status(200).json(gym)
    } catch (error) {
        console.log(error)
        res.status(404).json({Errors: error.Error})
    }
}