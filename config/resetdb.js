/* eslint-disable no-unused-vars */

const db = require('./database/db')
    
// Import the user model we have defined 
const bopuro = require('./model/bopuro')
const nepuro = require('./model/nepuro')
const marketingkit = require('./model/marketingkit')
db.sync({force:true}) 
