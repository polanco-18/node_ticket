import mongoose,{Schema} from 'mongoose';

const asigusuarioSchema = new Schema({
    codigo:{type:String, maxlength:64},
    usuario:{type: Schema.ObjectId, ref:'usuario'},
    sede:{type: Schema.ObjectId, ref:'sede'},
    servicio:{type: Schema.ObjectId, ref:'servicio'},
    createAt:{type:Date,default:Date.now}
});

const Asigusuario = mongoose.model('asigUsuario',asigusuarioSchema);

export default Asigusuario;