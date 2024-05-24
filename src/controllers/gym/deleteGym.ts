import deleteGym from "../../handlers/gym/deleteGym"
import { request, response } from "../../types"

export default async function deleteGymController(req: request, res: response) {
    try {
        const { id } = req.params
        await deleteGym(id)
        res.status(200).json("Gimnsaio eliminado")
    } catch (error) {
        res.status(404).json({ Error: error.message })
    }
}