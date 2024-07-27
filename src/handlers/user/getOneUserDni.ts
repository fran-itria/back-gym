import { User } from "../../db"

const getOneUserDni = async (dni: number) => {
    const user = await User.findOne({
        where: {
            dni: dni
        }
    })
    if (!user) throw new Error("Usuario no encontrado")
    return user
}

export default getOneUserDni