import { Router } from "express";
import { TemplateController } from "../controller/Template";
const router: Router = Router();


router.get('/', TemplateController.getTemplates);
router.get('/:name', TemplateController.getTemplate);
router.post('/', TemplateController.createTemplate);
router.patch('/:name', TemplateController.updateTemplate);
router.delete('/:name', TemplateController.deleteTemplate);

export default router;


