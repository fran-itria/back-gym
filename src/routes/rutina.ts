import { Router } from "express";
import getRutinasController from "../controllers/rutina/getRutinas";
import createRutinaController from "../controllers/rutina/createRutina";

const rutina = Router();

rutina.get("", getRutinasController);
rutina.post("", createRutinaController);

export default rutina;
