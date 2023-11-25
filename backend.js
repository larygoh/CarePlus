const http = require('http')
const path = require('path')
const cors = require('cors')

const express = require('express')
const fs = require("fs");
var session = require('express-session')

const app = express()
const server = http.createServer(app)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(session({ secret: "abc" }));

//conf
app.set('port', process.env.PORT || 3003)

//secção de login
app.use('/acesso-restrito/*', (req, res, next) => {
    if (req.session.username) {
        next();
    } else {
        res.redirect('/login.js')
    }
});

//start do server
server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))
})

//login do front para o back
app.post('/login', (req, res) => {
    const usuarioscad = fs.readFileSync('./usuarios.json')
    const usuariosparse = JSON.parse(usuarioscad)

    var username = req.body.username
    var password = req.body.password

    for (var umUsuario of usuariosparse) {
        if (username == umUsuario.username && password == umUsuario.password) {
            req.session.username == umUsuario
            res.send('conectado')
            return
        }
    }
    res.send('falhou')
})