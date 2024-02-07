import { Gym } from "../../db";

export default async function getGymId(id: string) {
    const gym = await Gym.findByPk(id)
    if (!gym) throw new Error('Gimnasio no encontrado')
    return gym
}