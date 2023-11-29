import { Router } from "express";
import getGymsController from "../controllers/gym/getGyms";
import createGymController from "../controllers/gym/createGym";
import getOneGymNameController from "../controllers/gym/getOneGymName";

const gym = Router()

gym.get('', getGymsController)
gym.get('/:gymName', getOneGymNameController)
gym.post('', createGymController)


export default gym