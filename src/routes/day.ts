import { Router } from "express";
import getDayController from "../controllers/day/getDay";
import createDayController from "../controllers/day/createDay";

const day = Router();

day.get("", getDayController);
day.post("", createDayController);

export default day;
