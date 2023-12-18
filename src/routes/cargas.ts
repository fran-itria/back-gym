import { Router } from 'express'
import getCargasController from '../controllers/cargas/getCargas'
import getOneCargasController from '../controllers/cargas/getOneCargas'
import createCargasController from '../controllers/cargas/createCargas'
import updateCargasController from '../controllers/cargas/updateCargas'
import deleteCargasController from '../controllers/cargas/deleteCargas'

const cargas = Router()

cargas.get('', getCargasController)
cargas.get('/:id', getOneCargasController)
cargas.post('', createCargasController)
cargas.put('', updateCargasController)
cargas.delete('', deleteCargasController)


export default cargas