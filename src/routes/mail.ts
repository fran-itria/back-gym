import { Router } from 'express'
import registerMailController from '../controllers/mails/registerMail'
import resetPasswordMailController from '../controllers/mails/resetPasswordMail'
const mails = Router()
export const team = 'Pro Active Center'

mails.post("/registro", registerMailController)
// mails.post("/newRutina",)
mails.post("/resetPassword", resetPasswordMailController)
// mails.post("/confirmPayment",)
// mails.post("/confirmChangeGym",)
// mails.post("/banUser",)


export default mails