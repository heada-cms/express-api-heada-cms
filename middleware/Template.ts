import { Request, Response, NextFunction } from "express";
import jwt = require("jsonwebtoken");
import { JWT_KEY } from "../config";
import { UserService } from "../service/User";
import { JWTOnlyAuthMiddleware } from "./index";
export const authorizationMiddleware = JWTOnlyAuthMiddleware;