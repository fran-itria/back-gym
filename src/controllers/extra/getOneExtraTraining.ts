import { getOneExtraTraining } from "../../handlers/extra/getOneExtraTraining";
import { request, response } from "../../types";

export default async function getOneExtraTrainingController(req: request, res: response) {
    try {
        const extra = await getOneExtraTraining(req.params.id)
        res.status(200).json(extra)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}