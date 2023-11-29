import { getDay } from "../../handlers/day/getDay";
import { request, response } from "../../types";

export default async function getDayController(req: request, res: response) {
  try {
    const days = await getDay();
    res.status(200).json(days);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
