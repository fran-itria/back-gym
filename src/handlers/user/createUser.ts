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
    password,
    admin,
    photo
  } = propertys;
  const gym: any = await getOneGymName(gymName);
  if (!gym) throw new Error('Gym no registrado')
  if (!password || !name || !surname || !contactEmergency || !dni || !age || !email || !phone || !user) throw new Error('Faltan datos')
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
    password: passwordHash,
    admin,
    photo,
    temporalCode: Math.floor(10000 + Math.random() * 9000)
  });
  await gym.addUser(newUser);
  return newUser;
}
