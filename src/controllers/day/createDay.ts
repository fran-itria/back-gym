import { createDay } from "../../handlers/day/createDay";
import { request, response } from "../../types";

export default async function createDayController(req: request, res: response) {
  try {
    const newDay = await createDay();
    res.status(200).json(newDay);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
