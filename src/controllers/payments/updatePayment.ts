import updatePayment from "../../handlers/payments/updatePayment";
import { request, response } from "../../types";

export default async function updatePaymentsController(req: request, res:response){
    try {
        const payment = await updatePayment(req.body) 
        res.status(200).json(payment)
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error.Error})
    }
}