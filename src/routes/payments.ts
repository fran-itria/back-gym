import { Router } from "express"
import getPaymentsController from "../controllers/payments/getPayments"
import getOnePaymentController from "../controllers/payments/getOnePayment"
import createPaymentController from "../controllers/payments/createPayment"
import updatePaymentsController from "../controllers/payments/updatePayment"
import deletePaymentController from "../controllers/payments/deletePayment"

const payments = Router()

payments.get('', getPaymentsController)
payments.get('/getOne/:id', getOnePaymentController)
payments.post('', createPaymentController)
payments.put('', updatePaymentsController)
payments.delete('/delete/:id', deletePaymentController)


export default payments