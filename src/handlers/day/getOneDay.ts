import { Day } from "../../db";

export default async function getOneDay(id: string) {
    const day = await Day.findByPk(id)
    if (!day) throw new Error("No se encuentra el día")
    return day
}