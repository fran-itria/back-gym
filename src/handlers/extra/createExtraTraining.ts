import { ExtraTraining } from "../../db";
import { createTraining } from "../../types";
import { getOneUserId } from "../user/getOneUserId";

export const createExtraTraining = async ({ userId, date, exercise, hour, distance, duration }: createTraining) => {
    const user: any = await getOneUserId(userId)
    const newTraining = await ExtraTraining.create({
        date,
        exercise,
        hour,
        distance,
        duration
    })
    if (!newTraining) throw new Error('No se pudo crear el entrenamiento')
    await user.addExtraTraining(newTraining)
    return newTraining
}