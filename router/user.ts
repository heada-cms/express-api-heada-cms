import { Router } from "express";
import { UserController } from "../controller/user";
const router = Router();

router.get('/', UserController.getUsers)
    .post('/', UserController.createUser)
    .post('/auth', UserController.login)

router.route('/:id')
    .get(UserController.getUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteUser);

export default router;