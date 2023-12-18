import { Ejercicio } from "../../db"

export const getOneEjercicio = async (id: string) => {
    const exercise = await Ejercicio.findByPk(id)
    if (!exercise) throw new Error('No se encuentra este ejercicio')
    return exercise
}