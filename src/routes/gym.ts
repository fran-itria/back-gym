import { Router } from "express";
import getGymsController from "../controllers/gym/getGyms";
import createGymController from "../controllers/gym/createGym";

const gym = Router()

gym.get('', getGymsController)
gym.post('', createGymController)


export default gym