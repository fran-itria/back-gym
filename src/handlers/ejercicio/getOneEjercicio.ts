import { Cargas, Ejercicio } from "../../db"

export const getOneEjercicio = async (id: string) => {
    const exercise = await Ejercicio.findByPk(id, {
        include: [
            {
                model: Cargas
            }
        ]
    })
    if (!exercise) throw new Error('No se encuentra este ejercicio')
    return exercise
}