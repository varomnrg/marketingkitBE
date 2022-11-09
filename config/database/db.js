require('dotenv').config();
var Sequelize = require('sequelize')
var db = new Sequelize('marketingkit','root','',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = db;