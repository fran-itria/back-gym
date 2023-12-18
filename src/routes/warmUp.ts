import { Router } from "express";
import createCalentamientoController from "../controllers/calentamiento/createCalentamiento";
import getCalentamientosController from "../controllers/calentamiento/getCalentamiento";
import createOneDayCalentamientoController from "../controllers/calentamiento/createOneDayCalentamiento";
import deleteCalentamientoController from "../controllers/calentamiento/deleteCalentamiento";

const warmUp = Router()

warmUp.get('', getCalentamientosController)
warmUp.post('/createCalentamiento', createCalentamientoController)
warmUp.post('/createOneCalentamiento', createOneDayCalentamientoController)
warmUp.delete("", deleteCalentamientoController)

export default warmUp