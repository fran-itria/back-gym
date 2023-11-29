import { Gym } from "../../db";

export default async function getOneGymName(name: string) {
    const gym = await Gym.findOne({ where: { name } })
    if (!gym) throw new Error('Gimnasio no encontrado')
    return gym
}