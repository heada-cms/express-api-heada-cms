import { Router } from "express";
import { IndexController } from "../controller";
const router = Router();

router.get('/', IndexController.getMany);
router.post('/', IndexController.create);

router.route('/:id')
    .get(IndexController.getOne)
    .patch(IndexController.update)
    .delete(IndexController.delete);

export default router;