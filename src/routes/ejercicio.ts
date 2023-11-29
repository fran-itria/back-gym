import { Router } from "express";
import getEjerciciosController from "../controllers/ejercicio/getEjercicios";
import createEjercicioController from "../controllers/ejercicio/createEjercicio";
import createEjerciciosController from "../controllers/ejercicio/createEjercicios";

const ejercicio = Router();

ejercicio.get("", getEjerciciosController);
ejercicio.post("/createOneEjercicio", createEjercicioController);
ejercicio.post("/createEjercicios", createEjerciciosController);

export default ejercicio;
