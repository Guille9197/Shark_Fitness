const express = require('express')

const { autenticacion, crearusuario, sendemail } = require('../controlador/controlador.js')

const Router = express.Router();

Router.get('/autenticacion/:correo/:contrasena', autenticacion);
Router.post('/crearusuario', crearusuario)
Router.post('/sendemail', sendemail)

module.exports = Router;