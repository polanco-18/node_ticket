import mongoose,{Schema} from 'mongoose';

const sedeSchema = new Schema({ 
    codigo:{type:String, maxlength:64},
    nombre:{type:String, maxlength:50,unique:true,required:true},
    pais:{type:String, maxlength:50,required:true},
    estado:{type:String, default: 1}, 
    createAt:{type:Date,default:Date.now}
});

const Sede = mongoose.model('sede',sedeSchema);

export default Sede;