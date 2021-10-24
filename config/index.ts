import { config } from "dotenv";
config();

export const MONGO_DB_URL = process.env.MONGO_DB_URL;
export const APP_PORT = process.env.APP_PORT;
export const JWT_KEY = process.env.JWT_KEY;