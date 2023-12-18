import { Router } from "express";
import getDayController from "../controllers/day/getDay";
import createDayController from "../controllers/day/createDay";
import deleteDayController from "../controllers/day/deleteDay";

const day = Router();

day.get("", getDayController);
day.post("", createDayController);
day.delete("", deleteDayController)

export default day;
