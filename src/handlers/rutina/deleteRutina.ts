import { Rutina } from "../../db";
import getOneRutina from "./getOneRutina";

export default async function deleteRutina(id: string) {
    await getOneRutina(id)
    await Rutina.destroy({ where: { id } })
}