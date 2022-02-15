import { model, Schema } from "mongoose";
import sha = require("sha256");
interface IUser {
    username: string;
    password: string;
    roles: Record<string, boolean>;
    admin: boolean;
}


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true,
        set: val => sha.x2(val)
    },
    roles: Object,
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
})

const userModel = model("User", userSchema);

export default userModel;