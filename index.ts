import { IndexController } from "./controller/index";
import express = require("express");
import { APP_PORT } from "./config";
import IndexRouter from "./router";
import UserRouter from "./router/user";
import TemplateRouter from "./router/template";
import APIKeyRouter from "./router/apiKey";
import { connect } from "mongoose";
import {MONGO_DB_URL} from "./config";
import * as path from "path";
import { UserService } from "./service/User";
const cors =  require("cors");


const app = express();

app.use(cors());
app.use(express.json())
app.use('/api/user', UserRouter)
app.use('/api/template', TemplateRouter);
app.use('/api/keys', APIKeyRouter)
app.use('/api', IndexRouter);
app.use('/', express.static(path.join(__dirname, 'panel')))
app.use((req, res) => {
    res.sendStatus(404);
})

connect(MONGO_DB_URL, {useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true}, err => {
    if (err) {
        console.error(err);
        throw err;
    }
    new UserService().create({ username: 'admin', password: 'admin1'})
    console.log("Database connected")
    app.listen(APP_PORT);
})



