import { Cargas } from "../../db"

export const getOneCargas = async (id: string) => {
    const cargas = await Cargas.findByPk(id)
    if (!cargas) throw new Error('No se encuentran las cargas')
    return cargas
}