import { Cargas, Ejercicio } from "../../db";

export const getEjercicios = async () => {
  const ejercicios = await Ejercicio.findAll({
    include: [
      {
        model: Cargas
      }
    ]
  });
  if (ejercicios.length == 0) throw new Error("No hay ejercicos creados");
  return ejercicios;
};
