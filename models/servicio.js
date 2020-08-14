import mongoose,{Schema} from 'mongoose';
//crear como son las variables apra la base de datos 
const servicioSchema = new Schema({ 
    codigo:{type:String, maxlength:64},
    nombre:{type:String, maxlength:50,unique:true,required:true},  
    createAt:{type:Date,default:Date.now}
});

const Servicio = mongoose.model('servicio',servicioSchema);

export default Servicio;