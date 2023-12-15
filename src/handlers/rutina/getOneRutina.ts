import { Day, Ejercicio, Rutina } from "../../db";

export default async function getOneRutina(id: string) {
    const rutina: any = await Rutina.findByPk(id, {
        include: {
            model: Day,
            include: [
                {
                    model: Ejercicio
                }
            ]
        }
    })
    if (!rutina) throw new Error('No se encuentra la rutina')
    return rutina
}