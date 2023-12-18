import { Loads } from "../../db"
import { getOneLoads } from "./getOneLoads"

export const deleteLoads = async (id: string) => {
    await getOneLoads(id)
    await Loads.destroy({ where: { id } })
}