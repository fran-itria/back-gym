import { Router } from "express";
import getAllMealsController from "../controllers/comidas/getMeals";
import getOneMealController from "../controllers/comidas/getOneMeal";
import createNewMealController from "../controllers/comidas/createNewMeal";

const comidas = Router()

comidas.get('', getAllMealsController)
comidas.get('/oneMeal', getOneMealController)
comidas.post('', createNewMealController)

export default comidas