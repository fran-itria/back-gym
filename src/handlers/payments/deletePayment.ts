import { Payments } from "../../db";
import getOnePayment from "./getOnePayment";

export default async function deletePayment(id: string){
    await getOnePayment(id)
    await Payments.destroy({where: {id}})
    return true
}