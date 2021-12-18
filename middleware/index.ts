import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");
import { JWT_KEY } from "../config";
import { UserService } from "../service/User";
import { APIKeyService } from "../service/apiKey";
import { TemplateService } from "../service/Template";
import sha256 from "sha256";
export const authorizationMiddleware = 
    async (req: Request, res: Response, next: NextFunction) => {
        const templateName = req.params.resourcename;
        const operationName =  req.method === "GET" ? "read" : req.method === "POST" ? "create" : req.method === "PATCH" ? "update" : "delete" 
        const template = await new TemplateService().getTemplate(templateName);
        if (template.authorization[operationName] === false) {
            next();
        } else {
            const authHeader = req.headers.authorization?.split(' ');
            console.log(authHeader);
            if (authHeader === undefined) {
                res.sendStatus(401);
                return;
            }
            const [authMethod, authToken] = authHeader;
            if (authMethod === "apiKey") {
                console.log(authToken);
                const apiKey = (await new APIKeyService().getMany({key: authToken}))[0];
                console.log(apiKey);
                if (apiKey?.operation[operationName] === true) {
                    next();
                }
                else {
                    res.sendStatus(403);
                }
                

            } else if (authMethod.toLowerCase() === "bearer") {
                        jwt.verify(authToken, JWT_KEY, async (err, decoded) => {
                            if (err) {
                                res.sendStatus(403);
                                return;
                            }
                            const userService = new UserService();
                            
                            try {
                                const user = await userService.getOne(decoded.id);
                           
                            
                
                                if (user === null) {
                                    res.sendStatus(403);
                                } else {
                                    next();
                                }
                            } catch (error) {
                                res.sendStatus(400);
                            }
                        })
                    }
                    else {
                        res.sendStatus(401); 
                    }
            
            
        }
    }

export const JWTOnlyAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader === undefined) {
        res.sendStatus(401);
        return;
    }
    const [authMethod, authToken] = authHeader && authHeader.split(' ');
    if (authMethod.toLowerCase() !== "bearer") {
        res.sendStatus(403);
        return;
    }
    jwt.verify(authToken, JWT_KEY, async (err, decoded) => {
        if (err) {
            res.sendStatus(403);
            return;
        }
        const userService = new UserService();
        
        try {
            const user = await userService.getOne(decoded.id);
       
        

            if (user === null) {
                res.sendStatus(403);
            } else {
                next();
            }
        } catch (error) {
            res.sendStatus(400);
        }
    })
}
