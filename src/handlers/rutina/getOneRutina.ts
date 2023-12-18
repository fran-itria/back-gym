import { Day, Exercise, Loads, Routine } from "../../db";

export default async function getOneRutina(id: string) {
    const routine: any = await Routine.findByPk(id, {
        include: {
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
            attributes: ['id', 'WarmUpId']
        }
    })
    if (!routine) throw new Error('No se encuentra la rutina')
    return routine
}