import { Router } from "express";
import createWarmUpController from "../controllers/calentamiento/createWarmUp";
import getWarmUpController from "../controllers/calentamiento/getWarmUp";
import createOneDayWarmUpController from "../controllers/calentamiento/createOneDayWarmUp";
import deleteWarmUpController from "../controllers/calentamiento/deleteWarmUp";
import getOneWarmUpController from "../controllers/calentamiento/getOneWarmUpController";

const warmUp = Router()

warmUp.get('', getWarmUpController)
warmUp.get('/:id', getOneWarmUpController)
warmUp.post('/createCalentamiento', createWarmUpController)
warmUp.post('/createOneCalentamiento', createOneDayWarmUpController)
warmUp.delete("", deleteWarmUpController)

export default warmUp