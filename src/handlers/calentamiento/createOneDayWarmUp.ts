import { WarmUp } from "../../db";
import { createOneDayCalentamientoProps } from "../../types";
import { createDay } from "../day/createDay";
import { createExercises } from "../ejercicio/createExercises";
import getOneWarmUp from "./getOneWarmUp";

export const createOneDayWarmUp = async (props: createOneDayCalentamientoProps) => {
    const { warmUpId, day } = props;
    const warmUp: any = await WarmUp.findByPk(warmUpId)
    if (!warmUp) throw new Error("Calentamiento no encontrado");
    const newDay: any = await createDay(day.day);
    const exercises: any = await createExercises(day.exercises)
    await newDay.addExercise(exercises);
    await warmUp.addDay(newDay)
    const updateWarmUp = await getOneWarmUp(warmUp.id)
    return updateWarmUp;
}