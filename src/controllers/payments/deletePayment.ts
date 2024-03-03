import deletePayment from "../../handlers/payments/deletePayment";
import { request, response } from "../../types";

export default async function deletePaymentController(req: request, res:response){
    try {
        await deletePayment(req.params.id) 
        res.status(200).json({Message: 'Pago eliminado correctamente'})
    } catch (error) {
        console.log(error)
        res.status(404).json({Error: error.Error})
    }
}