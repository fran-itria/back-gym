import { Meals } from "../../db"
import { createMeal } from "../../types"
import { getOneUserId } from "../user/getOneUserId"

export const createNewMeal = async (props: createMeal) => {
    const { userId, date, time, moment, food } = props
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newComida = await Meals.create({
        date,
        time,
        moment,
        food
    })
    await user.addMeals(newComida)
    return newComida
}