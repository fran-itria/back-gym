import { getOneUserId } from "../../handlers/user/getOneUserId";
import { request, response } from "../../types";

export default async function getOneUserIdController(
  req: request,
  res: response
) {
  const { id } = req.params;
  try {
    const user = await getOneUserId(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({ Error: error.message });
  }
}
