import { Router } from "express";
import getUsersController from "../controllers/user/getUsers";
import createUserController from "../controllers/user/createUser";
import getOneUserIdController from "../controllers/user/getOneUserId";
import updateUserController from "../controllers/user/updateUser";
import getUsersGymController from "../controllers/user/getUsersGym";
import loginUserController from "../controllers/user/loginUser";

const user = Router();

user.get("", getUsersController);
user.get("/:gymName", getUsersGymController);
user.get("/:id", getOneUserIdController);
user.post("", createUserController);
user.put("", updateUserController);
user.put("/login", loginUserController);

export default user;
