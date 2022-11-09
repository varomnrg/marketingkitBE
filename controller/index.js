const bopuro = require('./bopuro');
const nepuro = require('./nepuro');
const marketingkit = require('./marketingkit');
const controller = {};

controller.bopuro = bopuro;
controller.nepuro = nepuro;
controller.marketingkit = marketingkit;

module.exports = controller;