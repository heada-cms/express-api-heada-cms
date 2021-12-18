import { Model, model, Schema } from "mongoose";
import { BasicService } from "../abstractClasses/BasicService";
import APIKeyModel, { IAPIKey } from "../model/apiKey";
import generateApiKey = require("generate-api-key")
export class APIKeyService extends BasicService {
    constructor() {
        super(APIKeyModel);
    }

    async create(payload: {operation: {
        read: boolean,
        create: boolean,
        delete: boolean,
        update: boolean
    }}) {
        return await super.create({operation: payload.operation, key: generateApiKey()})
    }
}

