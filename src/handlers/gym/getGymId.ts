import { Gym, Payments, Shift, User } from "../../db";

export default async function getGymId(id: string) {
    const gym = await Gym.findByPk(id, {
        include: [
            {
                model: Shift
            },
            {
                model: Payments,
                include: [
                    {
                        model: User,
                        attributes: ['name', 'surname']
                    }
                ]
            }
        ]
    })
    if (!gym) throw new Error('Gimnasio no encontrado')
    return gym
}