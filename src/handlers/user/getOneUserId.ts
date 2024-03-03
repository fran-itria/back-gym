import { WarmUp, Meals, ExtraTraining, Gym, Routine, User, Shift, Payments } from "../../db";

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
      },
      {
        model: Shift
      },
      {
        model: Payments
      }
    ]
  });
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};
