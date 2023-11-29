import { Ejercicio } from "../../db";
import { ejercicioPropertys } from "../../types";

export const createOneEjercicio = async (propertys: ejercicioPropertys) => {
  const { name, series, repeticiones } = propertys;
  const newEjercicio = await Ejercicio.create({
    name,
    series,
    repeticiones,
  });
  if (!newEjercicio) throw new Error("No se pudo crear el ejercicio");
  return newEjercicio;
};
