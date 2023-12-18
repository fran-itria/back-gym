import { WarmUp } from "../../db";
import { RoutinePropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createExercises } from "../ejercicio/createExercises";
import { getOneUserId } from "../user/getOneUserId";

export const createWarmUp = async (props: RoutinePropertys) => {
    const { userId, days } = props
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newWarmUp: any = await WarmUp.create()
    days.forEach(async (day) => {
        const newDay: any = await createDay()
        const ejercicios = await createExercises(day.exercises)
        newDay.addExercise(ejercicios)
        await newWarmUp.addDay(newDay);
    });
    await user.addWarmUp(newWarmUp)
    return newWarmUp
}