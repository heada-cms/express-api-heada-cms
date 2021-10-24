import { UserService } from "../service/User";
import {Request, Response} from "express";
export class UserController {
    private static Service = new UserService();

    public static async getUsers(req: Request, res: Response) {
        try {
            const params = req.query;

            const users = await UserController.Service.getMany(params);

            res.send(users);
        } catch (err) {
            throw err;
        }
    }

    public static async getUser(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const user = await UserController.Service.getOne(id);

            res.send(user);
        } catch (err) {
            throw err;
        }
    }

    public static async createUser(req: Request, res: Response) {
        try {
            const body = req.body;

            const user = await UserController.Service.create(body);

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
        try {
            const {username, password} = req.body;
            const token = await UserController.Service.login(username, password);

            res.json({token});
        } catch (err) {
            throw err;
        }
    }

}
