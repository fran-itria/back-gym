import { Exercise } from "../../db"
import { exercisesPropertys } from "../../types"

export const createExercises = async (exercises: exercisesPropertys) => {
    const moreExercises = await Exercise.bulkCreate(exercises.reverse())
    if (!moreExercises) throw new Error('No se pudieron crear los ejercicios')
    return moreExercises
}