import hash from "../../services/hash";
import { changeUserProps } from "../../types";
import getGymId from "../gym/getGymId";
import { getOneUserId } from "./getOneUserId";

export const updateUser = async (changes: changeUserProps) => {
    const { id, admin, login, contactEmergency, dni, age, email, name, pay, phone, surname, user, password, ban, newGymId, photo } = changes
    const existUser: any = await getOneUserId(id)
    const existGym: any = await getGymId(newGymId)
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
        Gym: {
            name: existGym.name,
        },
        GymId: newGymId,
        photo
    })
    return existUser
}