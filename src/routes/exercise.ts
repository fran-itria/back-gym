import { Router } from "express";
import createExercisesController from "../controllers/ejercicio/createExercise";
import createOneExerciseController from "../controllers/ejercicio/createOneExercise";
import updateExerciseController from "../controllers/ejercicio/updateExercise";;
import getExercisesController from "../controllers/ejercicio/getExercises";
import getOneExerciseController from "../controllers/ejercicio/getOneExercise";
import deleteExerciseController from "../controllers/ejercicio/deleteExercise";

const exercise = Router();

exercise.get("", getExercisesController);
exercise.get("/:id", getOneExerciseController);
exercise.post("/createOneEjercicio", createOneExerciseController);
exercise.post("/createEjercicios", createExercisesController);
exercise.put("", updateExerciseController)
exercise.delete("/delete/:id", deleteExerciseController)

export default exercise;
