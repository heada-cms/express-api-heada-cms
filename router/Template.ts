import { Router } from "express";
import { TemplateController } from "../controller/Template";
import {authorizationMiddleware} from "../middleware/Template";
const router: Router = Router();


router.get('/', authorizationMiddleware,TemplateController.getTemplates);
router.get('/:name', authorizationMiddleware,TemplateController.getTemplate);
router.post('/', authorizationMiddleware,TemplateController.createTemplate);
router.patch('/:name', authorizationMiddleware,TemplateController.updateTemplate);
router.delete('/:name', authorizationMiddleware,TemplateController.deleteTemplate);

export default router;


