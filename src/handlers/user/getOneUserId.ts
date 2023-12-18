import { WarmUp, Meals, ExtraTraining, Gym, Routine, User } from "../../db";

export const getOneUserId = async (id: string) => {
  const user = await User.findByPk(id, {
    include: [
      {
        model: Gym,
        attributes: ["name"]
      },
      {
        model: Routine,
      },
      {
        model: WarmUp,
      },
      {
        model: Meals
      },
      {
        model: ExtraTraining
      }
    ]
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
