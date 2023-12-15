import { getAllMeals } from "../../handlers/comidas/getMeals";
import { request, response } from "../../types";

export default async function getAllMealsController(_req: request, res: response) {
    try {
        const meals = await getAllMeals()
        res.status(200).json(meals)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}