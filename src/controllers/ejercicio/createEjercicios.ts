import { createEjercicios } from "../../handlers/ejercicio/createEjercicios";
import { request, response } from "../../types";

export default async function createEjerciciosController(req: request, res: response) {
    const { dias } = req.body
    try {
        const ejercicios = await createEjercicios(dias)
        res.status(200).json(ejercicios)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}