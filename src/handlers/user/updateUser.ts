import hash from "../../services/hash";
import { changeUserProps } from "../../types";
import { getOneUserId } from "./getOneUserId";

export const updateUser = async (changes: changeUserProps) => {
    const { id, admin, login, contactEmergency, dni, age, email, name, pay, phone, surname, user, password, ban, newGymId, photo} = changes
    // console.log(id, photo)
    const existUser: any = await getOneUserId(id)
    let confirmPassword = password
    if (password) { confirmPassword = hash(password) }
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
        password: confirmPassword,
        login,
        ban,
        GymId: newGymId,
        photo
    })
    return existUser
}