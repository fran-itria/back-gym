import { getOneLoads } from "./getOneLoads"

export const updateCargas = async (props: { id: string, newLoads: string }) => {
    const { id, newLoads } = props
    const load = await getOneLoads(id)
    if (!load) throw new Error('No se encuentra esta carga')
    await load.update({
        loads: newLoads
    })
    return load
}   