import { Gym, Rutina, User } from "../../db"

const getUsers = async () => {
    const users = await User.findAll({
        include: [
            {
                model: Gym,
                attributes: ["name"]
            },
            {
                model: Rutina
            }
        ]
    })
    if (users.length == 0) throw new Error('Usuarios no encontrado')
    return users
}

export default getUsers