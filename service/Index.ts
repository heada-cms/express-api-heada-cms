import { Model, model, Schema } from "mongoose";
import { TemplateService } from "./Template";
export class IndexService {
    private TemplateService: TemplateService;
    private model?: Model<any> | null = null;
    private modelName: string;

    constructor(modelName: string) {
        this.TemplateService = new TemplateService();
        this.modelName = modelName;
    }

    private async loadModel() {
        if (!this.model) {
            const template = await this.TemplateService.getTemplate(this.modelName);
            console.log(template);
            this.model = model(this.modelName, new Schema(JSON.parse(template.schema)));
        }
    }

    async getMany(params: any) {
        await this.loadModel();
        return await this.model.find(params).exec();
    }
    
    async getOne(id: string) {
        await this.loadModel();
        return await this.model.findById(id).exec();
    }

    async create(payload: any) {
        await this.loadModel();
        return await new this.model(payload).save();
    }
    async update(id:string, payload: any) {
        await this.loadModel();
        return await this.model.findByIdAndUpdate(id, payload, {new: true}).exec();
    }
    async delete(id: string) {
        await this.loadModel();
        return await this.model.findByIdAndDelete(id).exec();
    }
}