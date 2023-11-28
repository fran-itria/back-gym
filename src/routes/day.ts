import { Router, Request, Response } from "express";
import { Day, Ejercicio } from "../db";

const day = Router()

day.get('', async (_req: Request, res: Response) => {
    const days = await Day.findAll({
        include: {
            model: Ejercicio,
            attributes: ['name', 'series', 'repeticiones', 'cargas']
        }
    })
    if (days) res.status(200).json(days)
})

day.post('', async (_req: Request, res: Response) => {
    try {
        const newDay = await Day.create()
        if (newDay) res.status(200).json(newDay)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

export default day