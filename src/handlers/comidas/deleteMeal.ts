import { Comidas } from "../../db"
import { getOneMeal } from "./getOneMeal"

export const deleteMeal = async (id: string) => {
    await getOneMeal(id)
    await Comidas.destroy({ where: { id } })
}