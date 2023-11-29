import { Day, Ejercicio } from "../../db";

export const getDay = async () => {
  const days = await Day.findAll({
    include: [
      {
        model: Ejercicio,
        attributes: ["name", "series", "repeticiones", "cargas"],
      },
    ],
  });
  if (days.length == 0) throw new Error("No hay dias creados");
  return days;
};
