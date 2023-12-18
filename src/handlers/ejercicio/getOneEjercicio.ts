import { Loads, Exercise } from "../../db"

export const getOneEjercicio = async (id: string) => {
    const exercise = await Exercise.findByPk(id, {
        include: [
            {
                model: Loads
            }
        ]
    })
    if (!exercise) throw new Error('No se encuentra este ejercicio')
    return exercise
}