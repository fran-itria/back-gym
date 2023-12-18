import { Calentamiento, Comidas, EjercicioExtra, Gym, Rutina, User } from "../../db"

export const getUsersGym = async (gymName: string) => {
    const users: any = await User.findAll({
        include: [
            {
                model: Gym,
                attributes: ["name"]
            },
            {
                model: Rutina,
            },
            {
                model: Calentamiento,
            },
            {
                model: Comidas
            },
            {
                model: EjercicioExtra
            }
        ]
    })
    if (users.length == 0) throw new Error('No hay usuarios')
    const usersFilter = users.filter(user => user.Gym.name.toLowerCase() == gymName.toLowerCase())
    return usersFilter
}