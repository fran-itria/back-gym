import { updatePaymentProps } from "../../types";
import getOnePayment from "./getOnePayment";

export default async function updatePayment({id, date, hour, amount}: updatePaymentProps){
    const payment = await getOnePayment(id)
    await payment.update({
        date,
        hour,
        amount
    })
    return payment
}