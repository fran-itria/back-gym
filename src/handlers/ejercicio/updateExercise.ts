import { Exercise } from "../../db";
import { changeEjercicioPropertys } from "../../types";

export const updateExercise = async (changes: changeEjercicioPropertys) => {
    const { id, loads, name, reps, series } = changes
    const exercise: any = await Exercise.findByPk(id)
    if (!exercise) throw new Error('Ejercicio no encontrado')
    await exercise.update({
        name,
        reps,
        series
    })
    return exercise
}