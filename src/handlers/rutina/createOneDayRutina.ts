import { Rutina } from "../../db";
import { OneDayrutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicios } from "../ejercicio/createEjercicios";
import { getOneUserId } from "../user/getOneUserId";

export const createOneDayRutina = async (propertys: OneDayrutinaPropertys) => {
  const { userId, dias } = propertys;
  const user: any = await getOneUserId({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");
  const day: any = await createDay();
  const ejercicios: any = await createEjercicios(dias)
  await day.addEjercicio(ejercicios);
  const newRutina: any = await Rutina.create();
  await newRutina.addDay(day);
  await user.addRutina(newRutina);
  return newRutina;
};
