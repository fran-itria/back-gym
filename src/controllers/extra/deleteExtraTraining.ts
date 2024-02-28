import { deleteExtraTraining } from "../../handlers/extra/deleteExtraTraining";
import { request, response } from "../../types";

export default async function deleteExtraTrainingController(req: request, res: response) {
    try {
        await deleteExtraTraining(req.params.id)
        res.status(200).json({ Message: 'Entrenamiento borrado exitosamente' })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}