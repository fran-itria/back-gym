import { Routine } from "../../db";
import { RoutinePropertys } from "../../types";
import { createDay } from "../day/createDay"
import { createExercises } from "../ejercicio/createExercises";
import { getOneUserId } from "../user/getOneUserId";

export const createRoutine = async ({ userId, days }: RoutinePropertys) => {
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newRutina: any = await Routine.create()
    days.forEach(async (day) => {
        const newDay: any = await createDay()
        const exercises = await createExercises(day.exercises)
        await newDay.addExercise(exercises)
        await newRutina.addDay(newDay);
    });
    await user.addRoutine(newRutina)
    return newRutina
}