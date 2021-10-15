import { IndexController } from "./controller/index";
import express = require("express");
import { APP_PORT } from "./config";
import IndexRouter from "./router";
import TemplateRouter from "./router/template";
import { connect } from "mongoose";
import {MONGO_DB_URL} from "./config";



const app = express();


app.use(express.json())
app.use('/template', TemplateRouter);
app.use('/', IndexRouter);
app.use((req, res) => {
    res.sendStatus(404);
})

connect(MONGO_DB_URL, {useNewUrlParser: true, useFindAndModify: true}, err => {
    if (err) {
        console.error(err);
        throw err;
    }
    app.listen(APP_PORT);
})



