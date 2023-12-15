
import { getOneMeal } from "../../handlers/comidas/getOneMeal";
import { request, response } from "../../types";

export default async function getOneMealController(req: request, res: response) {
    try {
        const oneMeal = await getOneMeal(req.params.id)
        res.satus(200).json(oneMeal)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}