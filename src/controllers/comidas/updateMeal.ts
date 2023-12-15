import { updateMeal } from "../../handlers/comidas/updateMeal";
import { request, response } from "../../types";

export default async function updateMealController(req: request, res: response) {
    try {
        const update = await updateMeal(req.body)
        res.status(200).json(update)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}