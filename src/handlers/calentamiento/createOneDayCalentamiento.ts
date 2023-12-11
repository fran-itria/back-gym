import { Calentamiento } from "../../db";
import { createOneDayCalentamientoProps } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";

export const createOneDayCalentamiento = async (props: createOneDayCalentamientoProps) => {
    const { calentamientoId, dias } = props;
    const calentamiento: any = await Calentamiento.findByPk(calentamientoId)
    if (!calentamiento) throw new Error("Rutina no encontrada");
    const day: any = await createDay();
    const ejercicios: any = await createEjercicios(dias)
    await day.addEjercicio(ejercicios);
    await calentamiento.addDay(day)
    return calentamiento;
}