import { Router, Request, Response } from "express";
import { Ejercicio } from "../db";

const ejercicio = Router()

ejercicio.get('', async (_req: Request, res: Response) => {
    const ejercicios = await Ejercicio.findAll()
    res.status(200).json(ejercicios)
})

ejercicio.post('', async (req: Request, res: Response) => {
    const { ejercicioName, series, repeticiones } = req.body
    try {
        const newEjercicio = await Ejercicio.create({ name: ejercicioName, series, repeticiones })
        res.status(200).json(newEjercicio)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})


export default ejercicio