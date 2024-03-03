import { Router } from "express";
import getGymsController from "../controllers/gym/getGyms";
import createGymController from "../controllers/gym/createGym";
import getOneGymNameController from "../controllers/gym/getOneGymName";
import getGymIdController from "../controllers/gym/getGymId";
import updateGymController from "../controllers/gym/updateGym";

const gym = Router()

gym.get('', getGymsController)
gym.get('/getGymId/:id', getGymIdController)
gym.get('/getGymName/:gymName', getOneGymNameController)
gym.post('', createGymController)
gym.put('', updateGymController)


export default gym