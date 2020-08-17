import models from '../models'; 
 //se declara los metodos para la conexion con mongo db
 
export default {
    add: async (req, res, next) => {
        try { 
            const reg = await models.Servicio.create(req.body);
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
            const reg = await models.Servicio.findOne({ _id: req.query._id })
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
            const reg = await models.Servicio.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, {'campaña': new RegExp(valor, 'i') }, {'descripcion': new RegExp(valor, 'i') }]}, { createAt: 0 })
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
            const reg = await models.Servicio.findByIdAndUpdate({ _id: req.body._id }, {campaña: req.body.campaña ,nombre: req.body.nombre, descripcion: req.body.descripcion});
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
            const reg = await models.Servicio.findByIdAndDelete({ _id: req.query._id });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Servicio.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    desactivate: async (req, res, next) => {
        try {
            const reg = await models.Servicio.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    } 
}