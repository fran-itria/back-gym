import { Router, Request, Response } from "express";
import { Ejercicio } from "../db";
import getEjerciciosController from "../controllers/ejercicio/getEjercicios";
import createEjercicioController from "../controllers/ejercicio/createEjercicio";

const ejercicio = Router();

ejercicio.get("", getEjerciciosController);
ejercicio.post("", createEjercicioController);

export default ejercicio;
