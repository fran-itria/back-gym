import { Router } from 'express'
import registerMailController from '../controllers/mails/registerMail'
const mails = Router()
export const team = 'Pro Active Center'

mails.post("/registro", registerMailController)
// mails.post("/newRutina",)
// mails.post("/resetPassword",)
// mails.post("/confirmPayment",)
// mails.post("/confirmChangeGym",)
// mails.post("/banUser",)


export default mails