import { Model, model, Schema } from "mongoose";
import { TemplateService } from "./Template";
export class IndexService {
    private TemplateService: TemplateService;
    private model?: Model<any> | null = null;

    constructor(modelName: string) {
        this.TemplateService = new TemplateService();
        this.TemplateService.getTemplate(modelName)
            .then(template => {
                this.model = model(modelName, new Schema(template));
            })
    }

    async getMany(params: any) {
        while(this.model === null);
        return await this.model.find(params).exec();
    }
    
    async getOne(id: string) {
        while(this.model === null);
        return await this.model.findById(id).exec();
    }

    async create(payload: any) {
        while(this.model === null);
        return await new this.model(payload).save();
    }
    async update(id:string, payload: any) {
        while(this.model === null);
        return await this.model.findByIdAndUpdate(id, payload, {new: true}).exec();
    }
    async delete(id: string) {
        while(this.model === null);
        return await this.model.findByIdAndDelete(id).exec();
    }
}