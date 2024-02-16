import { Router } from "express";
import getDayController from "../controllers/day/getDay";
import createDayController from "../controllers/day/createDay";
import deleteDayController from "../controllers/day/deleteDay";
import getOneDayController from "../controllers/day/getOneDay";

const day = Router();

day.get("", getDayController);
day.get("/oneDay/:id", getOneDayController)
day.post("", createDayController);
day.delete("/delete/:id", deleteDayController)

export default day;
