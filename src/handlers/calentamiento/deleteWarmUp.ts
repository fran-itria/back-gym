import { WarmUp } from "../../db";

export default async function deleteWarmUp(id: string) {
    const warmUp = await WarmUp.findByPk(id)
    if (!warmUp) throw new Error("No se encuentra el calentamiento")
    await WarmUp.destroy({ where: { id } })
}