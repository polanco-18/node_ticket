import models from '../models'; 
 //se declara los metodos para la conexion con mongo db

 export default {
    add: async (req, res, next) => {
        try { 
            const reg = await models.Tipoticket.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await models.Tipoticket.findOne({ _id: req.query._id })
            if (!reg) {
                res.status(404).send({
                    message: 'El registro no existe'
                })
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            let valor = req.query.valor;
            const reg = await models.Tipoticket.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'descripcion': new RegExp(valor, 'i') }] }, { createAt: 0 })
                .sort({ 'createAt': -1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try { 
            const reg = await models.Tipoticket.findByIdAndUpdate({ _id: req.body._id }, { descripcion: req.body.descripcion, nombre: req.body.nombre});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Tipoticket.findByIdAndDelete({ _id: req.query._id });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}