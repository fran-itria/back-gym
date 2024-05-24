import { Gym } from "../../db";

export default async function deleteGym(id: string) {
    const gym = await Gym.findByPk(id)
    if (!gym) throw new Error("No se encuentra el gimnasio")
    await Gym.destroy({ where: { id } })
}