import { Shift } from "../../db"

export const updateShift = async ({ id, day, hour }: { id: string, day: string, hour: string }) => {
    const existShift = await Shift.findByPk(id)
    if (!existShift) throw new Error("No se encuentra el turno")
    await existShift.update({
        day,
        hour
    })
    return existShift
}