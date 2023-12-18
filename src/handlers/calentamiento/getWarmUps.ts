import { WarmUp, Day, Exercise } from "../../db"

export const getWarmUps = async () => {
    const warmUps = await WarmUp.findAll({
        include: {
            model: Day,
            include: [
                {
                    model: Exercise
                },
            ],
            attributes: ['id', 'WarmUpId']
        }
    })
    if (warmUps.length == 0) throw new Error('No hay calentamientos para este usuario')
    return warmUps
}