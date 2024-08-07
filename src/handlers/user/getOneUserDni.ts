import { Gym, User, Routine, WarmUp, Meals, ExtraTraining, Shift, Payments } from "../../db"

const getOneUserDni = async (dni: number) => {
    const user = await User.findOne({
        where: {
            dni: dni
        },
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
            },
            {
                model: Payments
            }
        ]
    })
    if (!user) throw new Error("Usuario no encontrado")
    return user
}

export default getOneUserDni