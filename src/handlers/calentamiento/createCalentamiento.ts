import { WarmUp } from "../../db";
import { RoutinePropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";
import { getOneUserId } from "../user/getOneUserId";

export const createCalentamiento = async (props: RoutinePropertys) => {
    const { userId, days } = props
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newWarmUp: any = await WarmUp.create()
    days.forEach(async (day) => {
        const newDay: any = await createDay()
        const ejercicios = await createEjercicios(day.exercises)
        newDay.addExercise(ejercicios)
        await newWarmUp.addDay(newDay);
    });
    await user.addWarmUp(newWarmUp)
    return newWarmUp
}