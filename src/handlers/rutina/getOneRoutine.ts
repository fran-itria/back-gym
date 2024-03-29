import { Day, Exercise, Loads, Routine } from "../../db";

export default async function getOneRoutine(id: string) {
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
            attributes: ['id', 'WarmUpId', 'numberDay']
        }
    })
    routine.Days.sort((day1: { numberDay: number; }, day2: { numberDay: number; }) => day1.numberDay - day2.numberDay)
    routine.Days.forEach((day: { Exercises: { exercise: number; }[]; }) => {
        day.Exercises.sort((exercise1, exercise2) => {
            if (exercise1.exercise && exercise2.exercise) return exercise1.exercise - exercise2.exercise
            return 0
        })
    });
    if (!routine) throw new Error('No se encuentra la rutina')
    return routine
}