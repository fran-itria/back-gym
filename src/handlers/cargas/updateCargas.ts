import { getOneCargas } from "./getOneCargas"

export const updateCargas = async (props: { id: string, newCargas: string }) => {
    const { id, newCargas } = props
    const carga = await getOneCargas(id)
    if (!carga) throw new Error('No se encuentra esta carga')
    await carga.update({
        cargas: newCargas
    })
    return carga
}   