import { Gym, Shift } from "../../db";

export default async function getGymId(id: string) {
    const gym = await Gym.findByPk(id, {
        include: [
            {
                model: Shift
            }
        ]
    })
    if (!gym) throw new Error('Gimnasio no encontrado')
    return gym
}