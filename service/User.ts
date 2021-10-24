import UserModel from "../model/user";
import { BasicService } from "../abstractClasses/BasicService";
import sha256 = require("sha256");
import jwt = require("jsonwebtoken");
import { JWT_KEY } from "../config";
export class UserService extends BasicService {
    
    constructor() {
        super(UserModel);
    }

    async login(username: string, password: string) {
        const user = await this.model.findOne({username: username}).exec();
        if (!user) 
            throw new Error(`User ${username} not found`);
        const hashedPass = sha256.x2(password);
        if (hashedPass !== user.password) 
            throw new Error(`Wrong credentials`);
        
        return jwt.sign({id: String(user._id)}, JWT_KEY, { expiresIn: '2h'});
    }
}