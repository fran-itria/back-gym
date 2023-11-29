import createGym from "../../handlers/gym/createGym";
import { request, response } from "../../types";

export default async function createGymController(req: request, res: response) {
    const { name } = req.body
    try {
        const newGym = await createGym(name)
        res.status(200).json(newGym)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}