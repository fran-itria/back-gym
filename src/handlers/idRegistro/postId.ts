import { IdRegistro } from "../../db"

export const postId = async () => {
    const newId = await IdRegistro.create()
    return newId
}