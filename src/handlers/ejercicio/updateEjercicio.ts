import { Ejercicio } from "../../db";
import { changeEjercicioPropertys } from "../../types";

export const updateEjercicio = async (changes: changeEjercicioPropertys) => {
    const { id, cargas, name, repeticiones, series } = changes
    const exercise: any = await Ejercicio.findByPk(id)
    if (!exercise) throw new Error('Ejercicio no encontrado')
    const updateCargas = exercise.cargas.concat(cargas)
    await exercise.update({
        cargas: updateCargas,
        name,
        repeticiones,
        series
    })

    return exercise
}