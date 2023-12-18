import { Loads } from "../../db"

export const getLoads = async () => {
    const loads = await Loads.findAll()
    if (loads.length == 0) throw new Error('No existen cargas')
    return loads
}