import { Router, Request, Response } from "express";
import { Gym, User } from "../db";

const gym = Router()

gym.get('', async (_req: Request, res: Response) => {
    try {
        const gyms = await Gym.findAll({
            include: [{
                model: User,
                attributes: ['name', 'surname', 'usuario']
            }]
        })
        res.status(200).json({ Gimnasios: gyms })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

gym.post('', async (req: Request, res: Response) => {
    const { name } = req.body
    try {
        const gyms = await Gym.create({ name })
        res.status(200).json({ Gimnasios: gyms })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})


export default gym