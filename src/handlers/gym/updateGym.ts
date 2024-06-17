import { updateGymProps } from "../../types";
import getGymId from "./getGymId";

export default async function updateGym({ id, name, linkMp, amount, limit, time, close, open }: updateGymProps) {
    const gym = await getGymId(id)
    if (!gym) throw new Error('No existe el gym')
    let range = []
    if (open && close) {
        const length = Number(close.split(':')[0]) - Number(open.split(':')[0])
        const start = Number(open.split(':')[0])
        const end = start + 1
        range = Array.from({ length }, (_, i) => `${(start + i) < 10 ? `0${start + i}` : start + i}:00 - ${(end + i) < 10 ? `0${end + i}` : end + i}:00`)
    }
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