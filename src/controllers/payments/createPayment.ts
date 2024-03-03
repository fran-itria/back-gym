import createPayment from "../../handlers/payments/createPayment";
import { request, response } from "../../types";

export default async function createPaymentController(req: request, res:response){
    try {
        const newPayment = await createPayment(req.body) 
        res.status(200).json(newPayment)
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error.Error})
    }
}