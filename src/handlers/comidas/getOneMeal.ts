import { Comidas } from "../../db"

export const getOneMeal = async (id: string) => {
    const oneMeal = await Comidas.findByPk(id)
    if (!oneMeal) throw new Error('No se encontro la comida')
    return oneMeal
}