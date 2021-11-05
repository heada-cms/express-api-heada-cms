import { model, Schema, Types } from "mongoose";

export interface ITemplate {
    name: string;
    schema: string;
    authorization: {
        read: {
            requiresAuth: boolean;
            availableMethods: string[];
            apiKeys: string[];
        };
        create: {
            requiresAuth: boolean;
            availableMethods: string[];
            apiKeys: string[];
        };
        update: {
            requiresAuth: boolean;
            availableMethods: string[];
            apiKeys: string[];
        };
        delete: {
            requiresAuth: boolean;
            availableMethods: string[];
            apiKeys: string[];
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
        required: true,
        type: {
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
                apiKeys: {
                    type: [String],
                    default: [],
                    required: true
                }
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
                apiKeys: {
                    type: [String],
                    default: [],
                    required: true
                }
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
                apiKeys: {
                    type: [String],
                    default: [],
                    required: true
                }
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
                apiKeys: {
                    type: [String],
                    default: [],
                    required: true
                }
            }
        }
        
    }
})

const TemplateModel = model("ModelTemplate", TemplateSchema);

export default TemplateModel;