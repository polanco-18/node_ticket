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
            .populate('usuario',{usuario:3})
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
            const reg=await models.Articulo.find({$or:[{'nombre':new RegExp(valor,'i')},{'descripcion':new RegExp(valor,'i')}]},{createdAt:0})
            .populate('categoria',{nombre:1})
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
            const reg = await models.Articulo.findByIdAndUpdate({_id:req.body._id},{categoria:req.body.categoria,codigo:req.body.codigo,nombre:req.body.nombre,descripcion:req.body.descripcion,precio_venta:req.body.precio_venta,stock:req.body.stock});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
	listsede: async (req,res,next) => {
        try {
            let valor=req.query.valor;
            const reg=await models.Articulo.find({$or:[{'nombre':new RegExp(valor,'i')},{'descripcion':new RegExp(valor,'i')}]},{createdAt:0})
            .populate('categoria',{nombre:1})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
