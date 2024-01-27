import { UUID } from "crypto"
import { updateUser } from "./updateUser"

export const logout = async (id: UUID) => {
    await updateUser({ id, login: false })
    return true
}