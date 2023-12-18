import { Exercise } from "../../db";
import { ejercicioPropertys } from "../../types";

export const createOneEjercicio = async (propertys: ejercicioPropertys) => {
  const { name, series, reps } = propertys;
  const newEjercicio = await Exercise.create({
    name,
    series,
    reps,
  });
  if (!newEjercicio) throw new Error("No se pudo crear el ejercicio");
  return newEjercicio;
};
