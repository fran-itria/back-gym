import { Router } from "express";
import getAllIdRegistroController from "../controllers/idRegistro/getIdRegistro";
import getOneIdController from "../controllers/idRegistro/getOneId";
import postIdController from "../controllers/idRegistro/postId";
import deleteIdController from "../controllers/idRegistro/deleteId";

const id = Router()

id.get('', getAllIdRegistroController)
id.get('/:id', getOneIdController)
id.post('', postIdController)
id.delete('/delete/:id', deleteIdController)

export default id