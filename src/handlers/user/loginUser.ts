import { SECRET_KEY } from "../../config";
import { verifyUser } from "../../services/verifyUser";
import { updateUser } from "./updateUser"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const loginUser = async ({ user, password, token }: { user?: string, password?: string, token?: string }) => {
    if (token) {
        const data: any = jwt.verify(token, SECRET_KEY)
        const existUser: any = await verifyUser(data.user)
        if (data.password == existUser.password) {
            const user = await updateUser({ id: existUser.id, login: true })
            return user
        }
    } else if (user && password) {
        const existUser = await verifyUser(user)
        if (bcrypt.compareSync(password, existUser.password)) {
            const user = await updateUser({ id: existUser.id, login: true })
            const token = jwt.sign({ email: existUser.email, user: existUser.user, password: existUser.password }, SECRET_KEY, { expiresIn: '1h' })
            return { user, token }
        } else throw new Error('Contraseña incorrecta')
    }
}