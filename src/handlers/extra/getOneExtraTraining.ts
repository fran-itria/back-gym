import { ExtraTraining } from "../../db"

export const getOneExtraTraining = async (id: string) => {
    const training = await ExtraTraining.findByPk(id)
    if (!training) throw new Error('No se encuentra el entrenamiento')
    return training
}