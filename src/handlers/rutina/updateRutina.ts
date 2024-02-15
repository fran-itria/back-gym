import getOneRoutine from "./getOneRoutine";

export default async function updateRutina({ id, weeks }: { id: string, weeks: number }) {
    const existRoutine = await getOneRoutine(id)
    await existRoutine.update({
        weeks
    })
    return existRoutine
}