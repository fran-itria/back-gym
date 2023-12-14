import { IdRegistro } from "../../db"

export const getIdRegistro = async () => {
    const allId = await IdRegistro.findAll()
    if (allId.length == 0) throw new Error('No hay id de registros creados')
    return allId
}