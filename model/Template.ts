import { model, Schema } from "mongoose";

export interface ITemplate {
    name: string;
    schema: string;
}

const TemplateSchema = new Schema<ITemplate>({
    name: {
        type: String,
        required: true
    },
    schema: {
        type: String,
        template: true
    }
})

const TemplateModel = model("ModelTemplate", TemplateSchema);

export default TemplateModel;