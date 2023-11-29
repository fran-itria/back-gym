import { Router } from "express";
import getUsersController from "../controllers/user/getUsers";
import createUserController from "../controllers/user/createUser";
import getOneUserIdController from "../controllers/user/getOneUserId";

const user = Router();

user.get("", getUsersController);
user.get("/:id", getOneUserIdController);
user.post("", createUserController);

export default user;
