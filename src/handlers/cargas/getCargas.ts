import { Cargas } from "../../db"

export const getCargas = async () => {
    const cargas = await Cargas.findAll()
    if (cargas.length == 0) throw new Error('No existen cargas')
    return cargas
}