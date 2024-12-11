import { SECRET_KEY } from "../../config";
import { verifyUser } from "../../services/verifyUser";
import { getOneUserId } from "./getOneUserId";
import { updateUser } from "./updateUser"
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken"

export const loginUser = async ({ user, password, token }: { user?: string, password?: string, token?: string }) => {
    if (token) {
        const data: JwtPayload | string = jwt.verify(token, SECRET_KEY)
        const existUser: any = await getOneUserId(data['id'])
        const user = await updateUser({ id: existUser.id, login: true })
        return user
    } else if (user && password) {
        const existUser = await verifyUser(user)
        if (bcrypt.compareSync(password, existUser.password)) {
            const user = await updateUser({ id: existUser.id, login: true })
            const token = jwt.sign({ id: existUser.id }, SECRET_KEY, { expiresIn: '3h' })
            return { user, token }
        } else throw new Error('Contraseña incorrecta')
    }
}