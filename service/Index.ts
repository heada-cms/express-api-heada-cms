import { Model, model, Schema } from "mongoose";
import { TemplateService } from "./Template";
import { BasicService } from "../abstractClasses/BasicService";
export class IndexService extends BasicService {
    private TemplateService: TemplateService;
    private modelName: string;

    constructor(modelName: string) {
        super();
        this.TemplateService = new TemplateService();
        this.modelName = modelName;
    }

    private async loadModel() {
        const template = await this.TemplateService.getTemplate(this.modelName);
        // console.log(template);
        this.model = model(this.modelName, new Schema(JSON.parse(template.schema)));
    }

    async getMany(params: any) {
        await this.loadModel();
        return await super.getMany(params);
    }
    
    async getOne(id: string) {
        await this.loadModel();
        return await super.getOne(id);
    }

    async create(payload: any) {
        await this.loadModel();
        return await super.create(payload);
    }
    async update(id:string, payload: any) {
        await this.loadModel();
        return await super.update(id, payload);
    }
    async delete(id: string) {
        await this.loadModel();
        return await super.delete(id);
    }
}