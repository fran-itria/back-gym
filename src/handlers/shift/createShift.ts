import { Gym, Shift } from "../../db";
import { createShiftProps } from "../../types";
import { getOneUserId } from "../user/getOneUserId";

export const createShift = async ({ userId, day, hour, GymId}: createShiftProps) => {
    const existGym: any = await Gym.findByPk(GymId)
    const existUser: any = await getOneUserId(userId)
    const newShift = await Shift.create({
        day,
        hour
    })
    await existUser.addShift(newShift)
    if(!existGym) throw new Error('No se encuentra el gimnasio')
    await existGym.addShift(newShift)
    return newShift
}