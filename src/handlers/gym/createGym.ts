import { Gym } from "../../db";

export default async function createGym(name: string) {
    const newGym = await Gym.create({ name })
    if (!newGym) throw new Error('No se pudo crear el gimnasio')
    return newGym
}