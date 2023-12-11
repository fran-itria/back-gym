import { Calentamiento, Day, Ejercicio } from "../../db"

export const getCalentamientos = async () => {
    const calentamientos = await Calentamiento.findAll({
        include: {
            model: Day,
            include: [
                {
                    model: Ejercicio
                },
            ],
            attributes: ['id', 'CalentamientoId']
        }
    })
    if (calentamientos.length == 0) throw new Error('No hay calentamientos para este usuario')
    return calentamientos
}