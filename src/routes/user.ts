import { Router } from "express";
import getUsersController from "../controllers/user/getUsers";
import createUserController from "../controllers/user/createUser";
import getOneUserIdController from "../controllers/user/getOneUserId";
import updateUserController from "../controllers/user/updateUser";
import getUsersGymController from "../controllers/user/getUsersGym";
import loginUserController from "../controllers/user/loginUser";
import logoutController from "../controllers/user/logout";
import changeGymController from "../controllers/user/cahngeGym";
import getOneUserDniController from "../controllers/user/getOneUserDni";

const user = Router();

user.get("", getUsersController);
user.get("/forGym/:gymName", getUsersGymController);
user.get("/getOneUser/:id", getOneUserIdController);
user.get("/getOneUserByDni/:dni", getOneUserDniController);
user.post("", createUserController);
user.put("", updateUserController);
user.put("/login", loginUserController);
user.put("/logout", logoutController)
user.put("/changeGym", changeGymController)

export default user;
