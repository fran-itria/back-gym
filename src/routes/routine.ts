import { Router } from "express";
import getRoutineController from "../controllers/rutina/getRoutine";
import getOneRoutineController from "../controllers/rutina/getOneRutina";
import createOneDayRoutineController from "../controllers/rutina/createOneDayRutina";
import createRoutineController from "../controllers/rutina/createRutina";
import deleteRoutineController from "../controllers/rutina/deleteRutina";
import updateRutinaController from "../controllers/rutina/updateRutina";

const routine = Router();

routine.get("", getRoutineController);
routine.get("/:id", getOneRoutineController)
routine.post("/createOneDayRutina", createOneDayRoutineController);
routine.post("/createRutina", createRoutineController);
routine.put("", updateRutinaController)
routine.delete("", deleteRoutineController)

export default routine;
