import { Loads, Exercise } from "../../db";

export const getExercises = async () => {
  const exercises = await Exercise.findAll({
    include: [
      {
        model: Loads
      }
    ]
  });
  if (exercises.length == 0) throw new Error("No hay ejercicos creados");
  return exercises;
};
