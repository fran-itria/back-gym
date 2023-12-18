import { getExtraTraining } from "../../handlers/extra/getExtraTraining";
import { request, response } from "../../types";

export default async function getExtraTrainingController(_req: request, res: response) {
    try {
        const extra = await getExtraTraining()
        res.status(200).json(extra)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}