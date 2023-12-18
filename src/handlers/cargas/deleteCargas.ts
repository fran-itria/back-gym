import { Cargas } from "../../db"
import { getOneCargas } from "./getOneCargas"

export const deleteCargas = async (id: string) => {
    await getOneCargas(id)
    await Cargas.destroy({ where: { id } })
}