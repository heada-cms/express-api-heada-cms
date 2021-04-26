const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const resourceRouter = require('./routes/resource');
const resourceTypeRouter = require('./routes/resourceType');

const app = express();

app.use(logger('dev'));
app.use(cors(),express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/type', resourceTypeRouter);
app.use('/resource', resourceRouter);

module.exports = app;
