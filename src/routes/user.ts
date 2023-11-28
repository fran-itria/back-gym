import { Router, Request, Response } from "express";
import { error } from "console";
import { Gym, Rutina, User } from "../db";

const user = Router()

user.get('', async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Gym,
                attributes: ["name"]
            },
            {
                model: Rutina
            }
            ]
        })
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

user.post('', async (req: Request, res: Response) => {
    const { gymName, name, surname, contactEmergency, dni, edad, email, phone, usuario } = req.body
    try {
        const gym: any = await Gym.findOne({ where: { name: gymName } })
        if (!gym) throw error('Gimnasio no encontrado')
        const newUser = await User.create({ name, surname, contactEmergency, dni, edad, email, phone, usuario })
        await gym.addUser(newUser)
        res.status(200).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(404).json({ Errors: error })
    }
})


export default user