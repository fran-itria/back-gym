import { Exercise } from "../../db";
import { changeEjercicioPropertys } from "../../types";

export const updateEjercicio = async (changes: changeEjercicioPropertys) => {
    const { id, loads, name, reps, series } = changes
    const exercise: any = await Exercise.findByPk(id)
    if (!exercise) throw new Error('Ejercicio no encontrado')
    if (exercise.cargas != null) {
        const updateCargas = exercise.cargas.concat(loads)
        await exercise.update({
            cargas: updateCargas,
            name,
            reps,
            series
        })
    } else {
        const firstCargas = [loads]
        await exercise.update({
            cargas: firstCargas,
            name,
            reps,
            series
        })
    }

    return exercise
}