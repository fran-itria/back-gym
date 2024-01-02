import { Shift } from "../../db";
import { createShiftProps } from "../../types";
import { getOneUserId } from "../user/getOneUserId";

export const createShift = async ({ userId, day, hour }: createShiftProps) => {
    const existUser: any = await getOneUserId(userId)
    const newShift = await Shift.create({
        day,
        hour
    })
    await existUser.addShift(newShift)
    return newShift
}