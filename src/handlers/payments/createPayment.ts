import { Payments } from "../../db";
import { createPaymentProps } from "../../types";
import getGymId from "../gym/getGymId";
import { getOneUserId } from "../user/getOneUserId";

export default async function createPayment({UserId, GymId, date, hour, amount}: createPaymentProps){
    const gym: any = await getGymId(GymId)
    const user: any = await getOneUserId(UserId)
    const newPayment = await Payments.create({
        date,
        hour,
        amount
    })
    await gym.addPayments(newPayment)
    await user.addPayments(newPayment)
    return newPayment
}