import { Model } from "mongoose";
export abstract class BasicService {
    protected model: Model<any> | null;

    constructor(model: Model<any> = null) {
        this.model = model;
    }

    async getMany(params: any) {
        return await this.model.find(params).exec();
    }
    
    async getOne(id: string) {
        return await this.model.findById(id).exec();
    }

    async create(payload: any) {
        return await new this.model(payload).save();
    }
    async update(id:string, payload: any) {
        return await this.model.findByIdAndUpdate(id, payload, {new: true}).exec();
    }
    async delete(id: string) {
        return await this.model.findByIdAndDelete(id).exec();
    }
}