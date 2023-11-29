import { Router } from "express";
import getUsersController from "../controllers/user/getUsers";
import createUserController from "../controllers/user/createUser";

const user = Router()

user.get('', getUsersController)
user.post('', createUserController)


export default user