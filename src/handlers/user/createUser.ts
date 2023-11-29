import { User } from "../../db";
import { userPropertys } from "../../types";
import getOneGymName from "../gym/getOneGymName";

export default async function createUser(propertys: userPropertys) {
  const {
    gymName,
    name,
    surname,
    contactEmergency,
    dni,
    edad,
    email,
    phone,
    usuario,
  } = propertys;
  const gym: any = await getOneGymName(gymName);
  const newUser = await User.create({
    name,
    surname,
    contactEmergency,
    dni,
    edad,
    email,
    phone,
    usuario,
  });
  await gym.addUser(newUser);
  return newUser;
}
