import { Comidas } from "../../db"
import { createMeal } from "../../types"
import { getOneUserId } from "../user/getOneUserId"

export const createNewMeal = async (props: createMeal) => {
    const { userId, fecha, time, moment, food } = props
    const user: any = await getOneUserId({ id: userId })
    if (!user) throw new Error('Usuario no encontrado')
    const newComida = await Comidas.create({
        fecha,
        time,
        moment,
        food
    })
    await user.addComidas(newComida)
    return newComida
}