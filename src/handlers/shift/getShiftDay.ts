import getGymId from "../gym/getGymId";

export default async function getShiftDay({ gymId, day }) {
    console.log(day)
    const gym: any = await getGymId(gymId)
    return gym.Shifts.filter((shift: { day: string }) => shift.day === day)
}