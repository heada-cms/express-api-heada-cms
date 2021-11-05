import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");
import { JWT_KEY } from "../config";
import { UserService } from "../service/User";
import { TemplateService } from "../service/Template";
import sha256 from "sha256";
export const authorizationMiddleware = 
    async (req: Request, res: Response, next: NextFunction) => {
        const templateName = req.params.resourcename;
        const template = await new TemplateService().getTemplate(templateName);
        if (template.authorization[ req.method === "GET" ? "read" : req.method === "POST" ? "create" : req.method === "PATCH" ? "update" : "delete" ].requiresAuth === false) {
            next();
        } else {
            const authHeader = req.headers.authorization;
            if (authHeader === undefined) {
                res.sendStatus(400);
            }
            const [authMethod, authToken] = authHeader && authHeader.split(' ');
            if (authMethod === "apiKey") {
                if (template.authorization[
                    req.method === "GET" ? "read" : 
                        req.method === "POST" ? "create" :
                            req.method === "PATCH" ? "update" : "delete" 
                    ].availableMethods.includes("ApiKey") && 
                    template.authorization[
                        req.method === "GET" ? "read" : 
                            req.method === "POST" ? "create" :
                                req.method === "PATCH" ? "update" : "delete" 
                        ].apiKeys?.includes(sha256.x2(authToken))
                ) {
                    next();
                }
                res.sendStatus(403);


            } else if (authMethod.toLowerCase() === "bearer" && 
                    template.authorization[
                    req.method === "GET" ? "read" : 
                        req.method === "POST" ? "create" :
                            req.method === "PATCH" ? "update" : "delete" 
                    ].availableMethods.includes("Bearer")) {
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
            
            
        }
    }