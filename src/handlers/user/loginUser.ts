import { User } from "../../db"
import hash from "../../services/hash"
import { updateUser } from "./updateUser"

export const loginUser = async ({ user, password }: { user: string, password: string }) => {
    const existUser: any = await User.findOne({ where: { user } })
    if (!existUser) throw new Error('Usuario no encontrado')
    const hashPassword = hash(password)
    if (existUser.password == hashPassword) {
        await updateUser({ id: existUser.id, login: true })
        return true
    } else throw new Error('Contraseña incorrecta')
}