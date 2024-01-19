import { WarmUp, Meals, ExtraTraining, Gym, Routine, User, Shift, Day, Exercise } from "../../db"

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
            },
            {
                model: Shift
            }
        ]
    })
    if (users.length == 0) throw new Error('Usuarios no encontrado')
    return users
}

export default getUsers