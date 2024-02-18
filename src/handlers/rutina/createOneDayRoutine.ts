import { Routine } from "../../db";
import { OneDayrutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createExercises } from "../ejercicio/createExercises";
import getOneRoutine from "./getOneRoutine";

export const createOneDayRoutine = async (propertys: OneDayrutinaPropertys) => {
  const { routineId, day } = propertys;
  const routine: any = await Routine.findByPk(routineId)
  if (!routine) throw new Error("Rutina no encontrada");
  const existDay: any = await createDay(day.day);
  const exercises: any = await createExercises(day.exercises)
  await existDay.addExercise(exercises);
  await routine.addDay(existDay)
  const actualRoutine = await getOneRoutine(routine.id);
  return actualRoutine
};
