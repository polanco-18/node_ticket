import mongoose,{Schema} from 'mongoose';

const ticketSchema = new Schema({
    usuario:{type: Schema.ObjectId, ref:'usuario'},
    asigUsuario:{type: Schema.ObjectId, ref:'asigUsuario'},
    tipoticket:{type: Schema.ObjectId, ref:'tipoticket'},
    equipo:{type: Schema.ObjectId, ref:'equipo'},
    codigo:{type:String, maxlength:64},
    descripcion:{type:String, maxlength:200,required:true},
    hora:{type:String, maxlength:20,required:true},
    anyDesk:{type:String, maxlength:20,required:true},
    teamViewer:{type:String, maxlength:20,required:true},
    teamViewerClave:{type:String, maxlength:20,required:true},
    propetario:{type:String, maxlength:60},
    estado:{type:String, maxlength:20},
    comentario:{type:String, maxlength:200},
    createAt:{type:Date,default:Date.now}
});

const Ticket = mongoose.model('ticket',ticketSchema);

export default Ticket;
