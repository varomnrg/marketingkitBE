const express = require('express');
const router = express.Router()
const controller = require('../controller/index')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//add nepurpo order
router.post('/nepuro', controller.nepuro.addNepuroOrder)
//get nepuro order
router.get('/nepuro', controller.nepuro.getNepuroOrder)

module.exports = router