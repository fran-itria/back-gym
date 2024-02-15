import { Exercise } from "../../db"
import { getOneExercise } from "./getOneExercise"

const deleteExercise = async (id: string) => {
    await getOneExercise(id)
    await Exercise.destroy({ where: { id } })
}

export default deleteExercise