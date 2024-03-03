import getOnePayment from "../../handlers/payments/getOnePayment";
import { request, response } from "../../types";

export default async function getOnePaymentController(req: request, res:response){
    try {
        const payment = await getOnePayment(req.params.id) 
        res.status(200).json(payment)
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error.Error})
    }
}