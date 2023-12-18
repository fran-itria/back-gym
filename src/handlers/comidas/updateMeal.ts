import { Meals } from "../../db"
import { updateMealProps } from "../../types"

export const updateMeal = async (props: updateMealProps) => {
    const { date, food, id, moment, time } = props
    const updateMeal = await Meals.findByPk(id)
    if (!updateMeal) throw new Error('No se encontro la comida')
    await updateMeal.update({
        date,
        food,
        moment,
        time
    })
    return updateMeal
}