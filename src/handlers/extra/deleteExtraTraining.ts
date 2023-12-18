import { ExtraTraining } from "../../db";
import { getOneExtraTraining } from "./getOneExtraTraining";

export const deleteExtraTraining = async (id: string) => {
    await getOneExtraTraining(id)
    await ExtraTraining.destroy({ where: { id } })
}