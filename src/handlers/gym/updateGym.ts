import { updateGymProps } from "../../types";
import getGymId from "./getGymId";

export default async function updateGym({ id, name, linkMp, amount, limit, time, close, open }: updateGymProps) {
    const gym = await getGymId(id)
    if (!gym) throw new Error('No existe el gym')
    console.log(limit, time, open, close)
    const length = Number(close.split(':')[0]) - Number(open.split(':')[0])
    const range = Array.from({ length }, (_, i) => `${(Number(open.split(':')[0]) + i).toString()}:00 - ${(Number(open.split(':')[0]) + i + 1).toString()}:00`)
    await gym.update({
        name,
        linkMp,
        amount,
        limit,
        time,
        range
    })
    return gym
}