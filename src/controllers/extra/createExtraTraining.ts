import { createExtraTraining } from "../../handlers/extra/createExtraTraining";
import { request, response } from "../../types";

export default async function createExtraTrainingController(req: request, res: response) {
    try {
        const extra = await createExtraTraining(req.body)
        res.status(200).json(extra)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}