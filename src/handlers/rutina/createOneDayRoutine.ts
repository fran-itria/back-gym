import { Routine } from "../../db";
import { OneDayrutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createExercises } from "../ejercicio/createExercises";

export const createOneDayRoutine = async (propertys: OneDayrutinaPropertys) => {
  const { routineId, day } = propertys;
  const routine: any = await Routine.findByPk(routineId)
  if (!routine) throw new Error("Rutina no encontrada");
  const existDay: any = await createDay();
  const exercises: any = await createExercises(day)
  await existDay.addExercise(exercises);
  await routine.addDay(existDay)
  return routine;
};
