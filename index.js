
//declarando express 
import express from 'express';
//declarando bd 
import mongoose from 'mongoose';
//declarando morgan - actualizar sin inciar por comandos
import morgan from 'morgan';
//declarando cors -- peticiones 
import cors from 'cors';
import path from 'path';
//importar rutas
import router from './routes';

//se declara como arranca el programa y que puerto y librerias 

//conexion a la base de datos
mongoose.Promise = global.Promise;
const dburl = 'mongodb://localhost:27017/dbticket';
mongoose.connect(dburl, { useCreateIndex: true, useNewUrlParser: true })
    .then(mongoose => console.log('Conectado'))
    .catch(err => console.log(err));
//creando una constante 
const app = express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//creando una ruta estatica
app.use(express.static(path.join(__dirname, 'public')))
//estableciendo ruta
app.use('/ticket', router);


//Asignando puerto 3000
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});