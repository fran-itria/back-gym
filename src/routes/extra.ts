import { Router } from 'express'
import getExtraTrainingController from '../controllers/extra/getExtraTraining'
import getOneExtraTrainingController from '../controllers/extra/getOneExtraTraining'
import createExtraTrainingController from '../controllers/extra/createExtraTraining'
import updateExtraTrainingController from '../controllers/extra/updateExtraTraining'
import { deleteExtraTraining } from '../handlers/extra/deleteExtraTraining'
import deleteExtraTrainingController from '../controllers/extra/deleteExtraTraining'

const extra = Router()

extra.get('', getExtraTrainingController)
extra.get('/:id', getOneExtraTrainingController)
extra.post('', createExtraTrainingController)
extra.put('', updateExtraTrainingController)
extra.delete('', deleteExtraTrainingController)

export default extra