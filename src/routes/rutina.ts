import { Router } from "express";
import getRutinasController from "../controllers/rutina/getRutinas";
import createOneDayRutinaController from "../controllers/rutina/createOneDayRutina";

const rutina = Router();

rutina.get("", getRutinasController);
rutina.post("", createOneDayRutinaController);

export default rutina;
