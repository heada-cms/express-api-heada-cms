import { Model } from "mongoose";
import TemplateModel, { ITemplate } from "../model/Template";
export class TemplateService {
    private TemplateModel: Model<ITemplate, any, any>;
    constructor() {
        this.TemplateModel = TemplateModel;
    }

    public async createTemplate(payload: ITemplate): Promise<ITemplate>  {
        return await this.TemplateModel.create(payload);
    }

    public async getTemplates(params: Record<string,any> = {} ): Promise<ITemplate[]> {
        return await this.TemplateModel.find(params).exec();
    }

    public async getTemplate(name: string): Promise<ITemplate>{
        return await this.TemplateModel.findOne({name}).exec();
    }

    public async updateTemplate(name: string, payload: Partial<ITemplate>): Promise<ITemplate> {
        return await this.TemplateModel.findOneAndUpdate({name, payload}).exec();
    }

    public async deleteTemplate(name: string): Promise<ITemplate> {
        return await this.TemplateModel.findOneAndDelete({name}).exec();
    }

}