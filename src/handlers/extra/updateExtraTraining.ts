import { updateTraining } from "../../types";
import { getOneExtraTraining } from "./getOneExtraTraining";

export const updateExtraTraining = async ({ trainingId, date, distance, duration, exercise, hour }: updateTraining) => {
    const training = await getOneExtraTraining(trainingId)
    await training.update({
        date,
        distance,
        duration,
        exercise,
        hour
    })
    return training
}