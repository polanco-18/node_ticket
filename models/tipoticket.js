import mongoose,{Schema} from 'mongoose';

const ticketSchema = new Schema({
    
    codigo:{type:String, maxlength:64, required: true},
    nombretip:{type:String, maxlength:64, required: true},
    descripcion:{type:String, maxlength:300, required: true},
    createAt:{type:Date,default:Date.now}
});

const Ticket = mongoose.model('ticket',ticketSchema);

export default Ticket;