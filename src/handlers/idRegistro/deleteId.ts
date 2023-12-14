import { IdRegistro } from "../../db"

export const deleteId = async (id: string) => {
    try {
        await IdRegistro.destroy({ where: { id } })
        return true
    } catch (error) {
        return error
    }
}