const serverless = require('serverless-http');
const app = require('../../apiServer');

module.exports.handler = serverless(app);
