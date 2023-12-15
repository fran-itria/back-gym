import { Router } from "express";
import getUsersController from "../controllers/user/getUsers";
import createUserController from "../controllers/user/createUser";
import getOneUserIdController from "../controllers/user/getOneUserId";
import updateUserController from "../controllers/user/updateUser";

const user = Router();

user.get("", getUsersController);
user.get("/:id", getOneUserIdController);
user.post("", createUserController);
user.put("", updateUserController)

export default user;
