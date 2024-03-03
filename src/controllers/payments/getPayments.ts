import getPayments from "../../handlers/payments/getPayments";
import { request, response } from "../../types";

export default async function getPaymentsController(_req: request, res:response){
    try {
        const payments = await getPayments() 
        res.status(200).json(payments)
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error.Error})
    }
}