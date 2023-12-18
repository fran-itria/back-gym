import { Router } from "express";
import getUsersController from "../controllers/user/getUsers";
import createUserController from "../controllers/user/createUser";
import getOneUserIdController from "../controllers/user/getOneUserId";
import updateUserController from "../controllers/user/updateUser";
import getUsersGymController from "../controllers/user/getUsersGym";

const user = Router();

user.get("", getUsersController);
user.get("/:gymName", getUsersGymController);
user.get("/:id", getOneUserIdController);
user.post("", createUserController);
user.put("", updateUserController)

export default user;
