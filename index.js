//importaciones
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Definimos el puerto
const port = process.env.PORT || 3000;

/*LAS RUTAS*/
let proyectoRouter = require('./routes/proyecto');
/*************************
 *  Sitio estatico  y HBS *
 **************************/
const app = express();
//Establesco hbs como mi view
app.set('view engine','hbs');
//establecemos los partiales
hbs.registerPartials(__dirname + '/views/partials');
//sitio estatico
app.use(express.static(__dirname+'/public'));
app.use('/proyecto',proyectoRouter);

/*************************
 *  MONGODB x_x
 *************************/
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://Practicas:<987654321>@cluster0-ytva2.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));

/***********************************
 * Arrancamos el servidor web
 ***********************************/
app.listen(port,()=>{
    console.log('Escuchando el puerto 3000');
});
