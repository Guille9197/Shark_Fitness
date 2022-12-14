const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./rutas/rutas.js')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

app.use(express.static(__dirname + '/vista'));

app.use('/', routes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Escuchando en el pueto 3000')
})