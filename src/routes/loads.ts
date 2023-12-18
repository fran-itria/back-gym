import { Router } from 'express'
import getLoadsController from '../controllers/cargas/getLoads'
import getOneLoadsController from '../controllers/cargas/getOneLoads'
import createLoadsController from '../controllers/cargas/createLoads'
import updateLoadsController from '../controllers/cargas/updateLoads'
import deleteLoadsController from '../controllers/cargas/deleteLoads'

const loads = Router()

loads.get('', getLoadsController)
loads.get('/:id', getOneLoadsController)
loads.post('', createLoadsController)
loads.put('', updateLoadsController)
loads.delete('', deleteLoadsController)


export default loads