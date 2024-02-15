import { Exercise } from "../../db";
import { ejercicioPropertys } from "../../types";
import getOneDay from "../day/getOneDay";

export const createOneExercise = async (propertys: ejercicioPropertys) => {
  const { exercise, name, series, reps, dayId } = propertys;
  const existDay: any = await getOneDay(dayId)
  const newEjercicio = await Exercise.create({
    exercise,
    name,
    series,
    reps,
  });
  if (!newEjercicio) throw new Error("No se pudo crear el ejercicio");
  await existDay.addExercise(newEjercicio)
  return newEjercicio;
};
