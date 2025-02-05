import { Gym, Payments, Shift, User } from "../../db";

export default async function getGymId(id: string) {
    const gym = await Gym.findByPk(id, {
        include: [
            {
                model: Shift,
                include: [
                    {
                        model: User,
                        attributes: ['name', 'surname']
                    }
                ]
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
        ],
        order: [
            [Shift, 'day', 'ASC']
        ]
    })
    if (!gym) throw new Error('Gimnasio no encontrado')
    return gym
}