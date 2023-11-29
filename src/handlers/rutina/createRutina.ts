import { Rutina } from "../../db";
import { rutinaPropertys } from "../../types";
import { createDay } from "../day/createDay";
import { createEjercicio } from "../ejercicio/createEjercicio";
import { getOneUserId } from "../user/getOneUserId";

export const createRutina = async (propertys: rutinaPropertys) => {
  const { userId, series, repeticiones, ejercicioName } = propertys;
  const user: any = await getOneUserId({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");
  const day: any = await createDay();
  console.log(day);
  const ejercicio: any = await createEjercicio({
    series,
    repeticiones,
    name: ejercicioName,
  });
  console.log(ejercicio);
  await day.addEjercicio(ejercicio);
  const newRutina: any = await Rutina.create();
  await newRutina.addDay(day);
  await user.addRutina(newRutina);
  return newRutina;
};
