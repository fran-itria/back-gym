import { Loads } from "../../db"

export const getOneLoads = async (id: string) => {
    const loads = await Loads.findByPk(id)
    if (!loads) throw new Error('No se encuentran las cargas')
    return loads
}