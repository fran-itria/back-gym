import { Calentamiento, Comidas, EjercicioExtra, Gym, Rutina, User } from "../../db";

export const getOneUserId = async ({ id }: { id: string }) => {
  const user = await User.findByPk(id, {
    include: [
      {
        model: Gym,
        attributes: ["name"]
      },
      {
        model: Rutina,
      },
      {
        model: Calentamiento,
      },
      {
        model: Comidas
      },
      {
        model: EjercicioExtra
      }
    ]
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
