import { Comidas } from "../../db"
import { updateMealProps } from "../../types"

export const updateMeal = async (props: updateMealProps) => {
    const { fecha, food, id, moment, time } = props
    const updateMeal = await Comidas.findByPk(id)
    if (!updateMeal) throw new Error('No se encontro la comida')
    await updateMeal.update({
        fecha,
        food,
        moment,
        time
    })
    return updateMeal
}