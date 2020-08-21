import models from '../models';
export default {
    add: async (req,res,next) =>{
        try {
            const reg = await models.Ticket.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) => {
        try {
            const reg=await models.Ticket.findOne({_id:req.query._id})
            .populate('usuario',{email:1})
            .populate('sede',{nombre:1})
            .populate('servicio',{nombre:1})
			.populate('tipoticket',{nombre:1})
			.populate('equipo',{tipo:1});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    //faltan estas
	list: async (req,res,next) => {
        try {
            let valor=req.query.valor;
            const reg=await models.Ticket.find({$or:[{'descripcion':new RegExp(valor,'i')},{'comentario':new RegExp(valor,'i')}]},{createdAt:0})            
            .populate('usuario',{email:1})
            .populate('sede',{nombre:1})
            .populate('servicio',{nombre:1})
			.populate('tipoticket',{nombre:1})
			.populate('equipo',{tipo:1})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {
            const reg = await models.Ticket.findByIdAndUpdate({_id:req.body._id},{descripcion:req.body.descripcion,comentario:req.body.comentario,propetario:req.body.propetario,atencion:req.body.atencion,estado:req.body.estado});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
