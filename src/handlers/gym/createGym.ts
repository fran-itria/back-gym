import { Gym } from "../../db";

export default async function createGym(name: string) {
    const newGym = await Gym.create({ name })
    return newGym
}