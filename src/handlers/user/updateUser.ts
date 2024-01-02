import hash from "../../services/hash";
import { changeUserProps } from "../../types";
import { getOneUserId } from "./getOneUserId";

export const updateUser = async (changes: changeUserProps) => {
    const { id, admin, contactEmergency, dni, age, email, name, pay, phone, surname, user, password } = changes
    const existUser: any = await getOneUserId(id)
    const passwordHash = hash(password)
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
        user,
        password: passwordHash
    })
    return user
}