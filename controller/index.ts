import { Request, Response } from "express";
import { IndexService } from "../service/Index";
export class IndexController {
    private static Services: Map<string, IndexService> = new Map<string, IndexService>();

    

    //getMany
    public static async getMany(req: Request, res: Response) {
        if (!IndexController.Services.has(req.params.resourceName)) {
            IndexController.Services.set(req.params.resourceName, new IndexService(req.params.resourceName));
        }

        try { 
            const service = IndexController.Services.get(req.params.resourceName);
            const resourceArray = await service.getMany(req.query);
            res.json(resourceArray);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public static async getOne(req: Request, res: Response) {
        if (!IndexController.Services.has(req.params.resourceName)) {
            IndexController.Services.set(req.params.resourceName, new IndexService(req.params.resourceName));
        }

        try { 
            const service = IndexController.Services.get(req.params.resourceName);
            const resource = await service.getOne(req.params.id);
            res.json(resource);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public static async create(req: Request, res: Response) {
        if (!IndexController.Services.has(req.params.resourceName)) {
            IndexController.Services.set(req.params.resourceName, new IndexService(req.params.resourceName));
        }

        try { 
            const service = IndexController.Services.get(req.params.resourceName);
            const resource = await service.create(req.body);
            res.status(201).json(resource);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public static async update(req: Request, res: Response) {
        if (!IndexController.Services.has(req.params.resourceName)){
            IndexController.Services.set(req.params.resourceName, new IndexService(req.params.resourceName));
        }
        try {
            const service = IndexController.Services.get(req.params.resourceName);
            const resource = await service.update(req.params.id, req.body);
            res.json(resource);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    public static async delete(req: Request, res: Response) {
        if (!IndexController.Services.has(req.params.resourceName)) {
            IndexController.Services.set(req.params.resourceName, new IndexService(req.params.resourceName));
        }

        try {
            const service = IndexController.Services.get(req.params.resourceName);
            await service.delete(req.params.id);
            res.sendStatus(204);  
        } catch (err) {
            res.status(400).send(err.message);
        }
    }


}