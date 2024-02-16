import { Day } from "../../db"

export const deleteDay = async (id: string) => {
    await Day.findByPk(id)
    await Day.destroy({ where: { id } })
    return true
}