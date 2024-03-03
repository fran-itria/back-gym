import { Payments } from "../../db";

export default async function getOnePayment(id: string){
    const payment = await Payments.findByPk(id)
    if(!payment) throw new Error('No se encuentra el pago')
    return payment
}