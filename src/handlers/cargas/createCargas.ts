import { Cargas } from "../../db"
import { getOneEjercicio } from "../ejercicio/getOneEjercicio"

export const createCargas = async (props: { peso: string, exerciseId: string }) => {
    const { peso, exerciseId } = props
    const exercise: any = await getOneEjercicio(exerciseId)
    if (!exercise) throw new Error('No se encuentra el ejercicio')
    const newCarga = await Cargas.create({ cargas: peso })
    await exercise.addCargas(newCarga)
    return exercise
}