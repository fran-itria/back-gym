import { Router } from "express";
import getRutinasController from "../controllers/rutina/getRutinas";
import createOneDayRutinaController from "../controllers/rutina/createOneDayRutina";
import createRutinaController from "../controllers/rutina/createRutina";

const rutina = Router();

rutina.get("", getRutinasController);
rutina.post("/createOneDayRutina", createOneDayRutinaController);
rutina.post("/createRutina", createRutinaController);

export default rutina;
