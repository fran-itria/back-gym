import { Router } from "express";
import getAllMealsController from "../controllers/comidas/getMeals";
import getOneMealController from "../controllers/comidas/getOneMeal";
import createNewMealController from "../controllers/comidas/createNewMeal";
import updateMealController from "../controllers/comidas/updateMeal";
import deleteMealController from "../controllers/comidas/deleteMeal";

const meals = Router()
meals.get('', getAllMealsController)
meals.get('/:id', getOneMealController)
meals.post('', createNewMealController)
meals.put('', updateMealController)
meals.delete('/delete/:id', deleteMealController)

export default meals