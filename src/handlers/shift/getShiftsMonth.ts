import getGymId from "../gym/getGymId";

export default async function getShiftsMonth({ gymId, month }) {
    const gym: any = await getGymId(gymId)
    return gym.Shifts.filter((shift: { day: string }) => shift.day.split('-')[1] == month)
}