import { WarmUp } from "../../db";
import { createOneDayCalentamientoProps } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";

export const createOneDayCalentamiento = async (props: createOneDayCalentamientoProps) => {
    const { warmUpId, day } = props;
    const warmUp: any = await WarmUp.findByPk(warmUpId)
    if (!warmUp) throw new Error("Rutina no encontrada");
    const newDay: any = await createDay();
    const exercises: any = await createEjercicios(day)
    await newDay.addExercise(exercises);
    await warmUp.addDay(newDay)
    return warmUp;
}