import { WarmUp, Meals, ExtraTraining, Gym, Routine, User, Shift } from "../../db"

export const getUsersGym = async (gymName: string) => {
    const users: any = await User.findAll({
        include: [
            {
                model: Gym,
                attributes: ["name"]
            },
            {
                model: Routine,
            },
            {
                model: WarmUp,
            },
            {
                model: Meals
            },
            {
                model: ExtraTraining
            },
            {
                model: Shift
            }
        ]
    })
    if (users.length == 0) throw new Error('No hay usuarios')
    const usersFilter = users.filter(user => user.Gym.name.toLowerCase() == gymName.toLowerCase())
    return usersFilter
}