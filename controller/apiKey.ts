import { Request, Response } from "express";
import { APIKeyService} from "../service/apiKey";

export class APIKeyController {
    private static Service = new APIKeyService();


    static async create(req: Request, res: Response) {
        try {
            const key = await APIKeyController.Service.create(req.body);
            res.json(key)
        } catch (err) {
            res.status(400).send(err.message);
        }
    }



}