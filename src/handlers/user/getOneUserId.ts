import { User } from "../../db";

export const getOneUserId = async ({ id }: { id: string }) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
