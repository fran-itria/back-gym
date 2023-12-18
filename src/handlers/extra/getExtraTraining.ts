import { ExtraTraining } from "../../db"

export const getExtraTraining = async () => {
    const extras = await ExtraTraining.findAll()
    if (extras.length == 0) throw new Error('No hay ejercicio extra creados')
    return extras
}