/* eslint-disable no-undef */
const express = require('express');
require('dotenv').config();
//express
const app = express();
app.use(express.json());

const cors = require("cors")
const corsOptions ={
    origin:"http://127.0.0.1:5500",
    optionsSuccessStatus:200
}
app.use(cors(corsOptions))



app.listen(process.env.PORT, 
    () => {
    console.log(`Server Started at ${process.env.PORT}`)
})

//routes
const bopuro = require('./routes/bopuro');
const nepuro = require('./routes/nepuro');
const marketingkit = require('./routes/marketingkit');

app.use('/order', bopuro)
app.use('/order', nepuro)
app.use('/order', marketingkit)