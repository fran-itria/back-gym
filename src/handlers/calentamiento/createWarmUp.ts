import { WarmUp } from "../../db";
import { RoutinePropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createExercises } from "../ejercicio/createExercises";
import { getOneUserId } from "../user/getOneUserId";

export const createWarmUp = async (props: RoutinePropertys) => {
    const { userId, days } = props
    const user: any = await getOneUserId(userId)
    const newWarmUp: any = await WarmUp.create()
    for (const day of days) {
        const newDay: any = await createDay(day.day)
        const exercises = await createExercises(day.exercises)
        await newDay.addExercise(exercises)
        await newWarmUp.addDay(newDay);
    }
    await user.addWarmUp(newWarmUp)
    return newWarmUp
}