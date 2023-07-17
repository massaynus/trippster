'use strict';

const ServerlessHttp = require('serverless-http');
const app = require('./dist/server').default

module.exports.api = ServerlessHttp(app)
