import { Loads } from "../../db"

export const getCargas = async () => {
    const loads = await Loads.findAll()
    if (loads.length == 0) throw new Error('No existen cargas')
    return loads
}