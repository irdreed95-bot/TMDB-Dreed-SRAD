const serverless = require('serverless-http');
// استدعاء ملف السيرفر الرئيسي الموجود في جذر المشروع
const app = require('../../apServer');

module.exports.handler = serverless(app);

