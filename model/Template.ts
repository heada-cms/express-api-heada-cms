import { model, Schema, Types } from "mongoose";

export interface ITemplate {
    name: string;
    schema: string;
    authorization: {
        read: {
            availableMethods: string[];
            apiKeys?: string[];
        };
        create: {
            availableMethods: string[];
            apiKeys?: string[];
        };
        update: {
            availableMethods: string[];
            apiKeys?: string[];
        };
        delete: {
            availableMethods: string[];
            apiKeys?: string[];
        }
    }
}

const TemplateSchema = new Schema<ITemplate>({
    name: {
        type: String,
        required: true
    },
    schema: {
        type: String,
        template: true
    },
    authorization:  {
        read: {
            requiresAuth: {
                type: Boolean,
                required: true,
                default: false
            },
            availableMethods: {
                type: [String],
                required: true, 
                enum: ["Bearer", "ApiKey"],
                default: ["Bearer"]
            },
            apiKeys: [String]
        },
        create: {
            requiresAuth: {
                type: Boolean,
                required: true,
                default: false
            },
            availableMethods: {
                type: [String],
                required: true, 
                enum: ["Bearer", "apiKey"],
                default: ["Bearer"]
            },
            apiKeys: [String]
        },
        update: {
            requiresAuth: {
                type: Boolean,
                required: true,
                default: false
            },
            availableMethods: {
                type: [String],
                required: true, 
                enum: ["Bearer", "apiKey"],
                default: ["Bearer"]
            },
            apiKeys: [String]
        },
        delete: {
            requiresAuth: {
                type: Boolean,
                required: true,
                default: false
            },
            availableMethods: {
                type: [String],
                required: true, 
                enum: ["Bearer", "apiKey"],
                default: ["Bearer"]
            },
            apiKeys: [String]
        }
    }
})

const TemplateModel = model("ModelTemplate", TemplateSchema);

export default TemplateModel;