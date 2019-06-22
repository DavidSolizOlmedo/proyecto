
const mongoose = require('mongoose');
//mongoose.connect("mongodb://172.18.0.2:27017/tiendamovil");
//nota la anterior linea de codigo es la ip del contenedor del equipo de willy
// la siguiente linea de codigo tiene la ip del contenedor del  equipo de amilkar
mongoose.connect("mongodb://172.18.0.2:27017/tiendamovil");

module.exports = mongoose;
