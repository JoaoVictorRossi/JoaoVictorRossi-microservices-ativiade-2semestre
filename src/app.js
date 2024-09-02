const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/bancoatividade')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

require('./models/ticket-model')
require('./models/atendente-model')

const index = require('./routes/index')
app.use('/', index)

const ticketRouter = require('./routes/ticket-route')
app.use('/tickets', ticketRouter)

const atendenteRouter = require('./routes/atendente-route')
app.use('/atendentes', atendenteRouter)

module.exports = app;