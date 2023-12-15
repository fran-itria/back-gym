import { Calentamiento } from "../../db";

export default async function deleteCalentamiento(id: string) {
    const calentamiento = await Calentamiento.findByPk(id)
    if (!calentamiento) throw new Error("No se encuentra el calentamiento")
    await Calentamiento.destroy({ where: { id } })
}