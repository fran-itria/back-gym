import { Loads } from "../../db"
import { getOneExercise } from "../ejercicio/getOneExercise"

export const createLoads = async (props: { weight: string, exerciseId: string, week: number }) => {
    const { weight, exerciseId, week } = props
    const exercise: any = await getOneExercise(exerciseId)
    if (!exercise) throw new Error('No se encuentra el ejercicio')
    const newCarga = await Loads.create({ loads: weight, week })
    await exercise.addLoads(newCarga)
    return exercise
}