import { Router } from "express";
import getEjerciciosController from "../controllers/ejercicio/getEjercicios";
import createEjerciciosController from "../controllers/ejercicio/createEjercicios";
import createOneEjercicioController from "../controllers/ejercicio/createOneEjercicio";

const ejercicio = Router();

ejercicio.get("", getEjerciciosController);
ejercicio.post("/createOneEjercicio", createOneEjercicioController);
ejercicio.post("/createEjercicios", createEjerciciosController);

export default ejercicio;
