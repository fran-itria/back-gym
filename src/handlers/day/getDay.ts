import { Day, Exercise } from "../../db";

export const getDay = async () => {
  const days = await Day.findAll({
    include: [
      {
        model: Exercise,
        attributes: ["name", "series", "reps"],
      },
    ],
  });
  if (days.length == 0) throw new Error("No hay dias creados");
  return days;
};
