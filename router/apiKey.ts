import { Router } from "express";
import { APIKeyController } from "../controller/apiKey";
import {JWTOnlyAuthMiddleware} from "../middleware/index";

const router = Router();

router.post('/', JWTOnlyAuthMiddleware, APIKeyController.create);


export default router;