//crear y poner a escuchar al servidor
const http = require('http');

//importar express
const app = require('./src/app');


//configuracion de .env (fichero de entorno)
require('dotenv').config();

// configuracion base de datos
require('./src/config/db');

//creacion del servidor
const server = http.createServer(app) /* cualquier peticion que entre en nuestro servidor la gestionamos con la app express */

//levantar el servidor - poner al servidor a escuchar
const PORT = process.env.PORT || 3000; /* Todo lo que entre por el protocolo http, va al puerto 3000 */
server.listen(PORT)

// listeners - eventos sobre el servidor que podremos capturar 
server.on('listening', () => {
    console.log(`servidor escuchando en puerto ${PORT}`)
})

server.on('error', (error) => {
    console.log(error)
})