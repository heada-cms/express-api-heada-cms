import { Request, Response } from "express";
import { TemplateService } from "../service/Template";

export class TemplateController {
    private static Service: TemplateService = new TemplateService();


    public static async getTemplates(req: Request, res: Response) {

        try {
            const params = req.query;

            const templates = await TemplateController.Service.getTemplates(params);

            res.send(templates);
        } catch (err) {
            throw err;
        }
    }

    public static async getTemplate(req: Request, res: Response) {

        try { 
            const name = req.params.name;
            const template = await TemplateController.Service.getTemplate(name);

            res.send(template);
        } catch(err) {
            throw err;
        }
    }

    public static async createTemplate(req: Request, res: Response) {
        try{
            const body = req.body;
            const template = await TemplateController.Service.createTemplate(body);

            res.send(template);
        } catch(err) {
            throw err;
        }
    }

    public static async deleteTemplate(req: Request, res: Response) {
        try { 
            const name = req.params.name;

            const template = await TemplateController.Service.deleteTemplate(name);

            res.sendStatus(204);
        } catch (err) {
            throw err;
        }
    }

    public static async updateTemplate(req: Request, res: Response) {
        try {
            const name = req.params.name;

            const body = req.body;

            const template = await TemplateController.Service.updateTemplate(name, body);

            res.sendStatus(204);
        } catch (err) {
            throw err;
        }
    }
    
}