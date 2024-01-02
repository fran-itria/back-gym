import { Shift } from "../../db"

export const getShift = async () => {
    const shifts = Shift.findAll()
    return shifts
}