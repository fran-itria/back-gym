import { Router } from "express";
import getRutinasController from "../controllers/rutina/getRutinas";
import createOneDayRutinaController from "../controllers/rutina/createOneDayRutina";
import createRutinaController from "../controllers/rutina/createRutina";
import getOneRutinaController from "../controllers/rutina/getOneRutina";
import deleteRutinaController from "../controllers/rutina/deleteRutina";

const rutina = Router();

rutina.get("", getRutinasController);
rutina.get("/:id", getOneRutinaController)
rutina.post("/createOneDayRutina", createOneDayRutinaController);
rutina.post("/createRutina", createRutinaController);
rutina.delete("", deleteRutinaController)

export default rutina;
