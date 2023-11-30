import { Rutina } from "../../db";
import { OneDayrutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";

export const createOneDayRutina = async (propertys: OneDayrutinaPropertys) => {
  const { rutinaId, dias } = propertys;
  const rutina: any = await Rutina.findByPk(rutinaId)
  if (!rutina) throw new Error("Rutina no encontrada");
  const day: any = await createDay();
  const ejercicios: any = await createEjercicios(dias)
  await day.addEjercicio(ejercicios);
  await rutina.addDay(day)
  return rutina;
};
