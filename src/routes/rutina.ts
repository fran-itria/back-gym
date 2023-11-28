import { Router, Request, Response } from "express";
import { Day, Ejercicio, Rutina, User } from "../db";
import { error } from "console";

const rutina = Router()

rutina.get('', async (_req: Request, res: Response) => {
    const rutinas: any = await Rutina.findAll({
        include: {
            model: Day
        }
    })
    if (rutinas) res.status(200).json({ Rutinas: rutinas })
})

rutina.post('', async (req: Request, res: Response) => {
    const { userId, series, repeticiones, ejercicioName } = req.body
    try {
        const user: any = await User.findByPk(userId)
        if (!user) throw error('Usuario no encontrado')
        const day: any = await Day.create()
        console.log(day)
        const ejercicio: any = await Ejercicio.create({ series, repeticiones, name: ejercicioName })
        console.log(ejercicio)
        await day.addEjercicio(ejercicio)
        const newRutina: any = await Rutina.create()
        await newRutina.addDay(day)
        await user.addRutina(newRutina)
        res.status(200).json(day)
    } catch (error: any) {
        console.log(error)
        res.status(404).json(error)
    }
})


export default rutina