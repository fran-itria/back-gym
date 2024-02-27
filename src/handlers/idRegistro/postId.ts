import { IdRegistro } from "../../db"

export const postId = async (gym: string) => {
    const newId = await IdRegistro.create({ gym })
    return newId
}