import { connect } from "mongoose";
import { MONGO_DB_URL } from "../config";

export const DB_CONNECTION = connect(MONGO_DB_URL);

