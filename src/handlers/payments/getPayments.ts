import { Gym, Payments } from "../../db";

export default async function getPayments() {
    const payments = await Payments.findAll({
        include: [
            {
                model: Gym,
                attributes: ['name']
            }
        ]
    })
    if (payments.length == 0) throw new Error('No hay pagos registrados')
    return payments
}