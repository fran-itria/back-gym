import { Day } from "../../db";

export const createDay = async () => {
  const newDay = await Day.create();
  return newDay;
};
