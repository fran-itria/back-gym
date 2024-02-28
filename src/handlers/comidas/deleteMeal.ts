import { Meals } from "../../db"
import { getOneMeal } from "./getOneMeal"

export const deleteMeal = async (id: string) => {
    await getOneMeal(id)
    await Meals.destroy({ where: { id } })
    return true
}