import { Day } from "../../db";

export const createDay = async (numberDay: number) => {
  const newDay = await Day.create({ numberDay });
  return newDay;
};
