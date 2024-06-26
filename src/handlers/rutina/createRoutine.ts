import { Routine } from "../../db";
import { RoutinePropertys } from "../../types";
import { createDay } from "../day/createDay"
import { createExercises } from "../ejercicio/createExercises";
import { getOneUserId } from "../user/getOneUserId";

export const createRoutine = async ({ userId, days }: RoutinePropertys) => {
    const user: any = await getOneUserId(userId)
    const newRutina: any = await Routine.create()
    for (const day of days) {
        const newDay: any = await createDay(day.day)
        const exercises = await createExercises(day.exercises)
        await newDay.addExercise(exercises)
        await newRutina.addDay(newDay);
    }
    await user.addRoutine(newRutina)
    return newRutina
}