import { Shift } from "../../db"

export const deleteShift = async (id: string) => {
    const shift = await Shift.findByPk(id)
    if (!shift) throw new Error("No se encuentra el turno")
    await Shift.destroy({ where: { id } })
}