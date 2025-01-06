import { IdRegistro } from "../../db"

export const postIdAdmin = async () => {
    const url = 'https://pro-active-center.vercel.app'
    const newId: any = await IdRegistro.create()
    return `${url}/register/admin/${newId.id}`
}