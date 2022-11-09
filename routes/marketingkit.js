const express = require('express');
const router = express.Router()
const controller = require('../controller/index')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//add marketing kit order
router.post('/marketingkit', controller.marketingkit.addMarketingKit)

module.exports = router