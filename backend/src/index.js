const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Iniciando o App e Utilizando o Express e Cors
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o Socket.io
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    return next();
});


mongoose.connect(
    'mongodb://localhost:27017/goweek',
    { useNewUrlParser: true }
);

app.use(require('./routes'));

server.listen(3000, () => {
    console.log('server rodando na porta 3000');
});