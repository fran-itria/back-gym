import { Ejercicio } from "../../db"
import { ejerciciosPropertys } from "../../types"

export const createEjercicios = async (ejercicios: ejerciciosPropertys) => {
    const moreEjercicios = await Ejercicio.bulkCreate(ejercicios)
    if (!moreEjercicios) throw new Error('No se pudieron crear los ejercicios')
    return moreEjercicios
}