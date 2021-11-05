import { Router } from "express";
import { IndexController } from "../controller";
import { authorizationMiddleware}  from "../middleware";


const router = Router();

router.get('/:resourcename', authorizationMiddleware, IndexController.getMany);
router.post('/:resourcename', authorizationMiddleware, IndexController.create);

router.route('/:resourcename/:id')
    .get(authorizationMiddleware, IndexController.getOne)
    .patch(authorizationMiddleware, IndexController.update)
    .delete(authorizationMiddleware, IndexController.delete);

export default router;