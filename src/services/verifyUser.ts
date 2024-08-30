import { User } from "../db"

export async function verifyUser(user: string) {
    const existUser: any = await User.findOne({ where: { user } })
    if (!existUser) throw new Error('Usuario no encontrado')
    if (existUser.ban) throw new Error(existUser.ban)
    return existUser
}