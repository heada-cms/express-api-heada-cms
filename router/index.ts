import { Router } from "express";
import { IndexController } from "../controller";
const router = Router();

router.get('/:resourcename', IndexController.getMany);
router.post('/:resourcename', IndexController.create);

router.route('/:resourcename/:id')
    .get(IndexController.getOne)
    .patch(IndexController.update)
    .delete(IndexController.delete);

export default router;