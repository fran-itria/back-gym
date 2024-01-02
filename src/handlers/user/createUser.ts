import { User } from "../../db";
import hash from "../../services/hash";
import { userPropertys } from "../../types";
import getOneGymName from "../gym/getOneGymName";

export default async function createUser(propertys: userPropertys) {
  const {
    gymName,
    name,
    surname,
    contactEmergency,
    dni,
    age,
    email,
    phone,
    user,
    password
  } = propertys;
  const gym: any = await getOneGymName(gymName);
  if (!gym) throw new Error('Gym no registrado')
  if (!password || !name || !surname || !contactEmergency || !dni || !age || !email || !phone || !user) throw new Error('Faltan datos')
  console.log(password)
  const passwordHash = hash(password)
  const newUser = await User.create({
    name,
    surname,
    contactEmergency,
    dni,
    age,
    email,
    phone,
    user,
    password: passwordHash
  });
  await gym.addUser(newUser);
  return newUser;
}
