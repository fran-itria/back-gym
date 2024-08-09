import { Router } from 'express'
import registerMailController from '../controllers/mails/registerMail'
import resetPasswordMailController from '../controllers/mails/resetPasswordMail'
import confirmChangeGymMailController from '../controllers/mails/confirmChangeGym'
import confirmChangeGymUserMailController from '../controllers/mails/confirmChangeGymUser'
const mails = Router()
export const team = 'Pro Active Center'

mails.post("/registro", registerMailController)
// mails.post("/newRutina",)
mails.post("/resetPassword", resetPasswordMailController)
// mails.post("/confirmPayment",)
mails.post("/confirmChangeGym", confirmChangeGymMailController)
mails.post("/confirmChangeGymUser", confirmChangeGymUserMailController)
// mails.post("/banUser",)


export default mails