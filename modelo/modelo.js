
const con = require('./conexionBD.js')


module.exports = {

  autenticacion: async function (datos) {

    return await new Promise(function (resolve, reject) {
      con.query(`SELECT *FROM usuarios WHERE correo = '${datos.correo}' AND contrasena = '${datos.contrasena}'`, (err, rows, fields) => {
        if (err) reject(err)
        return resolve(rows)
      })
    })

  },

  crearusuario: async function (datos) {
    return await new Promise(function (resolve, reject) {
      con.query(`INSERT INTO usuarios (nombre, apellido_p, correo, contrasena) 
      VALUES('${datos.nombre}', '${datos.apellido_p}', '${datos.correo}', '${datos.contrasena}')`, (err, rows) => {
        return resolve(rows)
      })
    })
  }
}