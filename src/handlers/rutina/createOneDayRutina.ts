import { Routine } from "../../db";
import { OneDayrutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";

export const createOneDayRutina = async (propertys: OneDayrutinaPropertys) => {
  const { routineId, day } = propertys;
  const routine: any = await Routine.findByPk(routineId)
  if (!routine) throw new Error("Rutina no encontrada");
  const existDay: any = await createDay();
  const exercises: any = await createEjercicios(day)
  await existDay.addExercise(exercises);
  await routine.addDay(existDay)
  return routine;
};
