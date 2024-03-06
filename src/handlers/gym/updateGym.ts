import { updateGymProps } from "../../types";
import getGymId from "./getGymId";

export default async function updateGym({ id, name, linkMp, amount }: updateGymProps) {
    const gym = await getGymId(id)
    if (!gym) throw new Error('No existe el gym')
    await gym.update({
        name,
        linkMp,
        amount
    })
    return gym
}