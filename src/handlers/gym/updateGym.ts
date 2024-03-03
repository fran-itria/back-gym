import { updateGymProps } from "../../types";
import getGymId from "./getGymId";

export default async function updateGym({id, name}: updateGymProps){
    const gym = await getGymId(id)
    if(!gym) throw new Error ('No existe el gym')
    await gym.update({
        name
    })
    return gym 
}