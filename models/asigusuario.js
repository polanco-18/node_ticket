import mongoose,{Schema} from 'mongoose';

const asigUsuarioSchema = new Schema({
    usuario:{type: Schema.ObjectId, ref:'usuario'},
    sede:{type: Schema.ObjectId, ref:'sede'},
    servicio:{type: Schema.ObjectId, ref:'servicio'},
    codigo:{type:String, maxlength:64},
    atencion:{type:String, maxlength:30,required:true},
    createAt:{type:Date,default:Date.now}
});

const asigUsuario = mongoose.model('asigUsuario',asigUsuarioSchema);

export default asigUsuario;