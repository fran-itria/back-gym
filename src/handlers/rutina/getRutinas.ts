import { Day, Routine } from "../../db";

export default async function getRoutines() {
    const routines: any = await Routine.findAll({
        include: {
            model: Day
        }
    })
    if (routines.length == 0) throw new Error('No hay rutinas')
    return routines
}