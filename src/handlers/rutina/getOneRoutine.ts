import { Day, Exercise, Loads, Routine } from "../../db";

export default async function getOneRoutine(id: string) {
    const routine = await Routine.findByPk(id, {
        include: [
            {
                model: Day,
                include: [
                    {
                        model: Exercise,
                        include: [
                            {
                                model: Loads
                            }
                        ]
                    },
                ],
                attributes: ['id', 'WarmUpId', 'numberDay']
            }
        ],
        order: [
            [Day, 'numberDay', 'ASC'],
            [Day, Exercise, 'exercise', 'ASC'],
            [Day, Exercise, Loads, 'week', 'ASC']
        ]
    })
    if (!routine) throw new Error('No se encuentra la rutina')
    return routine
}