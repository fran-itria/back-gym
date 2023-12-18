import { Meals } from "../../db"

export const getAllMeals = async () => {
    const allMeals = await Meals.findAll()
    if (allMeals.length == 0) throw new Error('No hay comidas registradas')
    return allMeals
}