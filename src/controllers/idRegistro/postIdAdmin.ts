import { postIdAdmin } from "../../handlers/idRegistro/postIdAdmin";
import { request, response } from "../../types";

export default async function postIdAdminController(_req: request, res: response) {
    try {
        const newId = await postIdAdmin()
        res.status(200).json({ linkRegistro: newId })
    } catch (error) {
        console.log(error)
        res.status(404).json({ Error: error.message })
    }
}