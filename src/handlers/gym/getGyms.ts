import { Gym, User } from "../../db"

export default async function getGyms() {
    const gyms = await Gym.findAll({
        include: [{
            model: User,
            attributes: ['name', 'surname', 'usuario']
        }]
    })
    if (gyms.length == 0) throw Error('No hay gimnasios')
    return gyms
}