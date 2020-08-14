import mongoose,{Schema} from 'mongoose';
//crear como son las variables apra la base de datos 
const equipoSchema = new Schema({ 
    codigo:{type:String, maxlength:64},
    tipo:{type:String, maxlength:20,required:true},
    posesion:{type:String, maxlength:20,required:true},
    estado:{type:String, default: 1}, 
    createAt:{type:Date,default:Date.now}
});

const Equipo = mongoose.model('equipo',equipoSchema);

export default Equipo;