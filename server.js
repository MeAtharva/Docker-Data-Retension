require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('./initDB')();

app.use(express.json())

const customerRoute = require('./route/customers')
app.use('/customers', customerRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server Started ' + PORT))