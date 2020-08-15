import mongoose,{Schema} from 'mongoose';

const usuarioSchema = new Schema({
    codigo:{type:String, maxlength:64},
    rol:{type:String, maxlength:30, required: true},
    nombre:{type:String, maxlength:50,unique:true,required:true},
    apellido_paterno:{type:String, maxlength:50,unique:true,required:true}, 
    apellido_materno:{type:String, maxlength:50,unique:true,required:true}, 
    tipo_documento:{type:String, maxlength:20,required:true},
    num_documento:{type:String, maxlength:30,required:true}, 
    telefono:{type:String, maxlength:20,required:true},
    email:{type:String, maxlength:50,unique:true,required:true},
    password:{type:String,maxlength:64,required:true},
    estado:{type:Number,default:1},
    createAt:{type:Date,default:Date.now}
});

const Usuario = mongoose.model('usuario',usuarioSchema);

export default Usuario;