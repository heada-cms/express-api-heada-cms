import { UserService } from "../service/User";
import {Request, Response} from "express";
export class UserController {
    private static Service = new UserService();

    public static async getUsers(req: Request, res: Response) {
        try {
            const params = req.query;

            const users = await UserController.Service.getMany(params);
             /* #swagger.responses[200] = { 
                schema: [{ $ref: "#/definitions/user"}],
                description: "A typical response"
            } */

            res.send(users);
        } catch (err) {
            throw err;
        }
    }

    public static async getUser(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const user = await UserController.Service.getOne(id);
             /* #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/user"},
                description: "A typical response"
            } */

            res.send(user);
        } catch (err) {
            throw err;
        }
    }

    public static async createUser(req: Request, res: Response) {
        try {
            const body = req.body;

            const user = await UserController.Service.create(body);
             /* #swagger.responses[201] = { 
                schema: { $ref: "#/definitions/user"},
                description: "A typical response"
            } */

            res.status(201).json(user);
        } catch (err) {
            throw err;
        }
    }

    public static async updateUser(req: Request, res: Response) {
        try {
            const body = req.body;

            const id = req.params.id;

            const user = await UserController.Service.update(id,body);
             /* #swagger.responses[200] = { 
                schema: { $ref: "#/definitions/user"},
                description: "A typical response"
            } */
            
            res.json(user);
        } catch (err) {
            throw err;
        }
    }

    public static async deleteUser(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const user = await UserController.Service.delete(id);

            res.sendStatus(204);
        } catch (err) {
            throw err;
        }
    }

    public static async login(req: Request, res: Response) {
        /* #swagger.parameters['body'] = {
           username: "String",
           password: "String"
        }*/
        try {
            const {username, password} = req.body;
            const token = await UserController.Service.login(username, password);

            /* #swagger.responses[200] = {
                schema: {token: "JWT_TOKEN"}
            } */
            res.json({token});
        } catch (err) {
            throw err;
        }
    }

}
