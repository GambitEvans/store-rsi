const express = require('express');
const cors = require('cors');
const multipart = require('connect-multiparty');
const router = require('./router');
const dotEnv = require('dotenv');

//Loading environments variables.
dotEnv.config();

//Setting middlewares.
var server = express();
server.use(express.json());
server.use(cors());
server.use(multipart({ uploadDir: 'uploads'}));

//Setting router
server.use(router);

//Creating conetion with database.
require('./db').connect();

module.exports = server;