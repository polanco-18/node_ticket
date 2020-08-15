import mongoose,{Schema} from 'mongoose';

const detalleTicketSchema = new Schema({
    codigo:{type:String, maxlength:64},
	ticket:{type: Schema.ObjectId, ref:'ticket'},
	descripcion:{type:String, maxlength:300, required: true},
	cola:{type:String, maxlength:30, required: true},
	creador:{type: Schema.ObjectId, ref:'usuario'},
    numero:{type:String, maxlength:16,unique:true,required:true},
    usuario:{type: Schema.ObjectId, ref:'usuario'},
    tipoticket:{type: Schema.ObjectId, ref:'tipoticket'},
    equipo:{type: Schema.ObjectId, ref:'equipo'},
    estado:{type:Number,default:1},
    createAt:{type:Date,default:Date.now}
});

const detalleTicket = mongoose.model('detalleTicket',detalleTicketSchema);

export default detalleTicket;