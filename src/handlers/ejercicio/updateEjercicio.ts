import { Ejercicio } from "../../db";
import { changeEjercicioPropertys } from "../../types";

export const updateEjercicio = async (changes: changeEjercicioPropertys) => {
    const { id, cargas, name, repeticiones, series } = changes
    const exercise: any = await Ejercicio.findByPk(id)
    if (!exercise) throw new Error('Ejercicio no encontrado')
    if (exercise.cargas != null) {
        const updateCargas = exercise.cargas.concat(cargas)
        await exercise.update({
            cargas: updateCargas,
            name,
            repeticiones,
            series
        })
    } else {
        const firstCargas = [cargas]
        await exercise.update({
            cargas: firstCargas,
            name,
            repeticiones,
            series
        })
    }

    return exercise
}