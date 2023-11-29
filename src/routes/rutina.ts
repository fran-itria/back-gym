import { Router } from "express";
import getRutinasController from "../controllers/rutina/getRutinas";
import createRutinaOneDayController from "../controllers/rutina/createRutina";

const rutina = Router();

rutina.get("", getRutinasController);
rutina.post("", createRutinaOneDayController);

export default rutina;
