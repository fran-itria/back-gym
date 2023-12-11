import { Router } from "express";
import getEjerciciosController from "../controllers/ejercicio/getEjercicios";
import createEjerciciosController from "../controllers/ejercicio/createEjercicios";
import createOneEjercicioController from "../controllers/ejercicio/createOneEjercicio";
import updateEjercicioController from "../controllers/ejercicio/updateEjercicio";

const ejercicio = Router();

ejercicio.get("", getEjerciciosController);
ejercicio.post("/createOneEjercicio", createOneEjercicioController);
ejercicio.post("/createEjercicios", createEjerciciosController);
ejercicio.put("", updateEjercicioController)

export default ejercicio;
