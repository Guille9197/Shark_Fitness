const con = require('../modelo/conexionBD.js')
const modelo = require('../modelo/modelo.js')

const nodemailer = require('nodemailer')

module.exports = {
  autenticacion: function (req, res) {
    let datos = {
      correo: req.params.correo,
      contrasena: req.params.contrasena
    }

    console.log(datos)

    modelo.autenticacion(datos)
      .then(function resultado(rows) {
        res.send({
          registros: rows,
          status: true
        })
      })
      .catch(function error() {
        res.send({
          error,
          status: false
        })
      })
  },

  crearusuario: function (req, res) {

    let datos = {
      nombre: req.body.nombre,
      apellido_p: req.body.apellido,
      correo: req.body.correo,
      contrasena: req.body.contrasena
    }
    console.log(datos)
    modelo.crearusuario(datos)
      .then(function (resultado) {
        res.send({
          status: true
        })
      })
      .catch(function (error) {
        res.send({
          status: false
        })
      })
  },

  sendemail: async function (req, res) {


    let datos = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    }

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'guille.gnz.27.1997@gmail.com',
        pass: 'zauipcyvkuolqdqc'
      }
    });

    var mailOptions = {
      from: 'guille.gnz.27.1997@gmail.com',
      to: 'guille.gnz.27.1997@gmail.com',
      subject: 'Shark Fitness',
      html:
        `
        <h1>Shark Fitness</h1>
        </br>
        </p><strong>Nombre Cliente:</strong> ${datos.name}</p>
        </br>
        <p><strong>Correo Cliente:</strong> ${datos.email}</p>
        <p>
          ${datos.message}
        </p>
      `
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.send({
          status: false,
          message: "Error al enviar el mensaje intente más tarde"
        })
      } else {
        res.send({
          status: true,
          message: "El mensaje se ha enviado"
        })
      }
    });

  }
}
