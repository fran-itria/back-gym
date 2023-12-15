import { IdRegistro } from "../../db"
import { getOneId } from "./getOneId"

export const deleteId = async (id: string) => {
    await getOneId(id)
    await IdRegistro.destroy({ where: { id } })
}