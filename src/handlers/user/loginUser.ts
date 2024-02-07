import { User } from "../../db"
import { updateUser } from "./updateUser"
import bcrypt from "bcrypt";

export const loginUser = async ({ user, password }: { user: string, password: string }) => {
    const existUser: any = await User.findOne({ where: { user } })
    if (!existUser) throw new Error('Usuario no encontrado')
    if (bcrypt.compareSync(password, existUser.password)) {
        const user = await updateUser({ id: existUser.id, login: true })
        return user
    } else throw new Error('Contraseña incorrecta')
}