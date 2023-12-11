import { Router } from "express";
import createCalentamientoController from "../controllers/calentamiento/createCalentamiento";
import getCalentamientosController from "../controllers/calentamiento/getCalentamiento";
import createOneDayCalentamientoController from "../controllers/calentamiento/createOneDayCalentamiento";

const calentamiento = Router()

calentamiento.get('', getCalentamientosController)
calentamiento.post('/createCalentamiento', createCalentamientoController)
calentamiento.post('/createOneCalentamiento', createOneDayCalentamientoController)

export default calentamiento