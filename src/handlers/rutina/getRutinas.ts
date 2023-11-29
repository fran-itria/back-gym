import { Day, Rutina } from "../../db";

export default async function getRutinas() {
    const rutinas: any = await Rutina.findAll({
        include: {
            model: Day
        }
    })
    if (rutinas.length == 0) throw new Error('No hay rutinas')
    return rutinas
}