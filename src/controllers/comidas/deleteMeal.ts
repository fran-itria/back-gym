import { deleteMeal } from "../../handlers/comidas/deleteMeal";
import { request, response } from "../../types";

export default async function deleteMealController(req: request, res: response) {
    try {
        await deleteMeal(req.body.id)
        res.status(200).json({ Message: 'Comida eliminada correctamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}