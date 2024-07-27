import { Gym, User, Routine, WarmUp, Meals, ExtraTraining, Shift, Payments } from "../../db"

const getOneUserEmail = async (email: string) => {
    const user = await User.findOne({
        where: {
            email: email
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

export default getOneUserEmail