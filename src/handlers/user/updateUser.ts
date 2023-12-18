import { changeUserProps } from "../../types";
import { getOneUserId } from "./getOneUserId";

export const updateUser = async (changes: changeUserProps) => {
    const { id, admin, contactEmergency, dni, age, email, name, pay, phone, surname, user } = changes
    const existUser: any = await getOneUserId(id)
    await existUser.update({
        admin,
        contactEmergency,
        dni,
        age,
        email,
        name,
        pay,
        phone,
        surname,
        user
    })
    return user
}