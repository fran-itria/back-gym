import { User } from "../../db"

export const deleteUser = async (id: string) => {
    const user = await User.findByPk(id)
    if (!user) throw new Error("No se encuentra el usuario")
    await User.destroy({ where: { id } })
}