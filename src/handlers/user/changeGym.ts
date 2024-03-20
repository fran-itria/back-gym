import { updateUser } from "./updateUser"
import { changeGymProps } from "../../types"

export const changeGym = async ({ newGymId, userId }: changeGymProps) => {
    const user = await updateUser({ id: userId, newGymId })
    return user
}