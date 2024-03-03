import { Payments } from "../../db";

export default async function getPayments(){
    const payments = await Payments.findAll()
    if(payments.length == 0) throw new Error('No hay pagos registrados')
    return payments
}