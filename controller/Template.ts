import { Request, Response } from "express";
import { TemplateService } from "../service/Template";

export class TemplateController {
    private static Service: TemplateService = new TemplateService();


    public static async getTemplates(req: Request, res: Response) {
        // #swagger.description = 'Downloads all resources with their mongoose templates'

        try {
            const params = req.query;
 
            const templates = await TemplateController.Service.getTemplates(params);
            /* #swagger.responses[200] = { 
                schema: [{ $ref: "#/definitions/Template"}],
                description: "A typical response"
            } */
            res.send(templates);
        } catch (err) {
            res.status(400).send(err.message)
        }
    }

    public static async getTemplate(req: Request, res: Response) {
        // #swagger.description = 'Downloads resource with given id with its mongoose template'


        try { 
            const name = req.params.name;
            const template = await TemplateController.Service.getTemplate(name);

            /* #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Template"},
                description: "A typical response"
            } */

            res.send(template);
        } catch(err) {
            res.status(400).send(err.message)
        }
    }

    public static async createTemplate(req: Request, res: Response) {
        // #swagger.description = 'Creates template'
        /* #swagger.parameters['body'] = {
           in: 'body', 
           schema: {$ref: "#/definitions/createTemplate"} 
        }*/
        try{
            const body = req.body;
            const template = await TemplateController.Service.createTemplate(body);

            /* #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/Template"},
                description: "A typical response"
            } */


            res.send(template);
        } catch(err) {
            res.status(400).send(err.message)
        }
    }

    public static async deleteTemplate(req: Request, res: Response) {
        // #swagger.description = 'Deletes template with given name'
        /* #swagger.responses[204] = No Content */
        try { 
            const name = req.params.name;

            const template = await TemplateController.Service.deleteTemplate(name);
            
            res.sendStatus(204);
        } catch (err) {
            res.status(400).send(err.message)
        }
    }

    public static async updateTemplate(req: Request, res: Response) {
        // #swagger.description = 'Updates template with given name'
        /* #swagger.responses[204] = No Content */
        try {
            const name = req.params.name;

            const body = req.body;

            const template = await TemplateController.Service.updateTemplate(name, body);

            res.sendStatus(204);
        } catch (err) {
            res.status(400).send(err.message)
        }
    }
    
}