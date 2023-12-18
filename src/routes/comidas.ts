import { Router } from "express";
import getAllMealsController from "../controllers/comidas/getMeals";
import getOneMealController from "../controllers/comidas/getOneMeal";
import createNewMealController from "../controllers/comidas/createNewMeal";
import updateMealController from "../controllers/comidas/updateMeal";
import deleteMealController from "../controllers/comidas/deleteMeal";

const comidas = Router()

comidas.get('', getAllMealsController)
comidas.get('/:id', getOneMealController)
comidas.post('', createNewMealController)
comidas.put('', updateMealController)
comidas.delete('', deleteMealController)

export default comidas