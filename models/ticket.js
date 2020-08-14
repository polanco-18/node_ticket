import mongoose,{Schema} from 'mongoose';

const ticketSchema = new Schema({
    codigo:{type:String, maxlength:64, required: true},
    numero:{type:String, maxlength:16,unique:true,required:true},
    usuario:{type: Schema.ObjectId, ref:'usuario'},
    tipoticket:{type: Schema.ObjectId, ref:'tipoticket'},
    equipo:{type: Schema.ObjectId, ref:'equipo'},
    createAt:{type:Date,default:Date.now}
});

const Ticket = mongoose.model('ticket',ticketSchema);

export default Ticket;
