import { model, Schema, Types } from "mongoose";

export interface ITemplate {
    name: string;
    schema: string;
    authorization: {
        read: Boolean;
        create: Boolean;
        update: Boolean;
        delete: Boolean;
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
            read: Boolean,
            create: Boolean,
            update: Boolean,
            delete: Boolean
        }
        
    }
})

const TemplateModel = model("ModelTemplate", TemplateSchema);

export default TemplateModel;