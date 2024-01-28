import { User } from "../../db"
import { updateUser } from "./updateUser"
import bcrypt from "bcrypt";

export const loginUser = async ({ user, password }: { user: string, password: string }) => {
    const existUser: any = await User.findOne({ where: { user } })
    if (!existUser) throw new Error('Usuario no encontrado')
    if (bcrypt.compareSync(password, existUser.password)) {
        await updateUser({ id: existUser.id, login: true })
        return true
    } else throw new Error('Contraseña incorrecta')
}