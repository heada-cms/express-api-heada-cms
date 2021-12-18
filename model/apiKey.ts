import { model, Schema } from "mongoose";

export interface IAPIKey {
    operation: {
        read:  boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
    key: string;
}

const APIKeySchema = new Schema({
    operation: {
        read: {
            type: Boolean,
            required: true
        },
        create: {
            type: Boolean,
            required: true
        },
        update: {
            type: Boolean,
            required: true
        },
        delete: {
            type: Boolean,
            required: true
        }
    },
    key: {
        type: String,
        required: true
    }
});

const APIKeyModel = model("APIKey", APIKeySchema);

export default APIKeyModel;