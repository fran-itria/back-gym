import { createNewMeal } from "../../handlers/comidas/createNewMeal";
import { request, response } from "../../types";

export default async function createNewMealController(req: request, res: response) {
    try {
        const newComida = await createNewMeal(req.body)
        res.status(200).json(newComida)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}