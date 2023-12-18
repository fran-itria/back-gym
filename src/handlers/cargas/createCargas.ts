import { Loads } from "../../db"
import { getOneEjercicio } from "../ejercicio/getOneEjercicio"

export const createCargas = async (props: { weight: string, exerciseId: string }) => {
    const { weight, exerciseId } = props
    const exercise: any = await getOneEjercicio(exerciseId)
    if (!exercise) throw new Error('No se encuentra el ejercicio')
    const newCarga = await Loads.create({ loads: weight })
    await exercise.addLoads(newCarga)
    return exercise
}