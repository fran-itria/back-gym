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
    routine.Days.sort((day1: { numberDay: number; }, day2: { numberDay: number; }) => day1.numberDay - day2.numberDay)
    routine.Days.forEach((day: { Exercises: { exercise: number; }[]; }) => {
        day.Exercises.sort((exercise1: { exercise: number; }, exercise2: { exercise: number; }) => {
            if (exercise1.exercise && exercise2.exercise) return exercise1.exercise - exercise2.exercise
            return 0
        })
    });
    return routine
}