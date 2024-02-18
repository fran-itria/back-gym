import { Day, Exercise, WarmUp } from "../../db";

export default async function getOneWarmUp(id: string) {
    const routine: any = await WarmUp.findByPk(id, {
        include: {
            model: Day,
            include: [
                {
                    model: Exercise,
                },
            ],
            attributes: ['id', 'WarmUpId', 'numberDay']
        }
    })
    if (!routine) throw new Error('No se encuentra la rutina')
    return routine
}