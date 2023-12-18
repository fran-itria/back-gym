import { updateExtraTraining } from "../../handlers/extra/updateExtraTraining";
import { request, response } from "../../types";

export default async function updateExtraTrainingController(req: request, res: response) {
    try {
        const extra = await updateExtraTraining(req.body)
        res.status(200).json(extra)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}