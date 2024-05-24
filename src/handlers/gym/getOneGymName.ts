import { Gym, User } from "../../db";

export default async function getOneGymName(name: string) {
    const gym = await Gym.findOne({
        where: { name }, include: [
            { model: User }
        ]
    })
    if (!gym) throw new Error('Gimnasio no encontrado')
    return gym
}