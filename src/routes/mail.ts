import { Router } from 'express'
import registerMailController from '../controllers/mails/registerMail'
import resetPasswordMailController from '../controllers/mails/resetPasswordMail'
import confirmChangeGymMailController from '../controllers/mails/confirmChangeGym'
import confirmChangeGymUserMailController from '../controllers/mails/confirmChangeGymUser'
import createRoutineMailController from '../controllers/mails/createRoutine'
import banUserMailController from '../controllers/mails/banUserMail'
const mails = Router()
export const team = 'Pro Active Center'

mails.post("/registro", registerMailController)
mails.post("/newRoutine", createRoutineMailController)
mails.post("/resetPassword", resetPasswordMailController)
mails.post("/confirmChangeGym", confirmChangeGymMailController)
mails.post("/confirmChangeGymUser", confirmChangeGymUserMailController)
mails.post("/banUser", banUserMailController)


export default mails