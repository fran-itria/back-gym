import { Routine } from "../../db";
import getOneRutina from "./getOneRoutine";

export default async function deleteRoutine(id: string) {
    await getOneRutina(id)
    await Routine.destroy({ where: { id } })
    return true
}