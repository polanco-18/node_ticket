import mongoose,{Schema} from 'mongoose';
//crear como son las variables apra la base de datos 
const tipoticketSchema = new Schema({ 
    codigo:{type:String, maxlength:64},
    nombre:{type:String, maxlength:50,unique:true,required:true},
    descripcion:{type:String, maxlength:300,required:true},
    createAt:{type:Date,default:Date.now}
});

const Tipoticket = mongoose.model('tipoticket',tipoticketSchema);

export default Tipoticket;