import { Meals } from "../../db"
import { createMeal } from "../../types"
import { getOneUserId } from "../user/getOneUserId"

export const createNewMeal = async (props: createMeal) => {
    const { userId, date, hour, moment, food } = props
    const user: any = await getOneUserId(userId)
    const newComida = await Meals.create({
        date,
        hour,
        moment,
        food
    })
    await user.addMeals(newComida)
    return newComida
}