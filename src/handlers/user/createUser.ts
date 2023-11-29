import { Gym, User } from "../../db";
import { userPrpertys } from "../../types";

export default async function createUser(propertys: userPrpertys) {
    const { gymName, name, surname, contactEmergency, dni, edad, email, phone, usuario } = propertys
    const gym: any = await Gym.findOne({ where: { name: gymName } })

    if (!gym) throw new Error('Gimnasio no encontrado')

    const newUser = await User.create({ name, surname, contactEmergency, dni, edad, email, phone, usuario })
    await gym.addUser(newUser)

    return newUser
}