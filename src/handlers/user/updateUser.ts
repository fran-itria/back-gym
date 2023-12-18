import { changeUserProps } from "../../types";
import { getOneUserId } from "./getOneUserId";

export const updateUser = async (changes: changeUserProps) => {
    const { id, admin, contactEmergency, dni, edad, email, name, pay, phone, surname, usuario } = changes
    const user: any = await getOneUserId(id)
    await user.update({
        admin,
        contactEmergency,
        dni,
        edad,
        email,
        name,
        pay,
        phone,
        surname,
        usuario
    })
    return user
}