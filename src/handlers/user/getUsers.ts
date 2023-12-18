import { WarmUp, Meals, ExtraTraining, Gym, Routine, User } from "../../db"

const getUsers = async () => {
    const users = await User.findAll({
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
            }
        ]
    })
    if (users.length == 0) throw new Error('Usuarios no encontrado')
    return users
}

export default getUsers