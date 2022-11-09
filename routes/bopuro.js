const express = require('express');
const router = express.Router()
const controller = require('../controller/index')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//add bopuro order
router.post('/bopuro', controller.bopuro.addBopuroOrder)
//get bopuro order
router.get('/bopuro', controller.bopuro.getBopuroOrder)

module.exports = router