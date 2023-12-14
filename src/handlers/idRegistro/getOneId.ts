import { IdRegistro } from "../../db"

export const getOneId = async (id: string) => {
    const oneId = await IdRegistro.findByPk(id)
    console.log(oneId)
    if (!oneId) throw new Error('No se encuentra el id')
    return oneId
}