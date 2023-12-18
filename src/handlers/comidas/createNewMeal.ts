import { Meals } from "../../db"
import { createMeal } from "../../types"
import { getOneUserId } from "../user/getOneUserId"

export const createNewMeal = async (props: createMeal) => {
    const { userId, date, hour, moment, food } = props
    const user: any = await getOneUserId(userId)
    if (!user) throw new Error('Usuario no encontrado')
    const newDate = new Date(date)
    const newComida = await Meals.create({
        date: newDate,
        hour,
        moment,
        food
    })
    await user.addMeals(newComida)
    return newComida
}