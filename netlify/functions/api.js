const serverless = require('serverless-http');
const app = require('../apServer');

module.exports.handler = serverless(app);
