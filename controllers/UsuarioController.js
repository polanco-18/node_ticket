import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
    add: async (req, res, next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            const reg = await models.Usuario.create(req.body);
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
            const reg = await models.Usuario.findOne({ _id: req.query._id })
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
            const reg = await models.Usuario.find({ $or: [{ 'nombre': new RegExp(valor, 'i') }, { 'email': new RegExp(valor, 'i') }] }, { createAt: 0 })
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
            let pas = req.body.password;
            //validacion si usuario esta encryptado
            const reg0 = await models.Usuario.findOne({ _id: req.body._id })
            if (pas != reg0.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { rol: req.body.rol, tipo_documento: req.body.tipo_documento, nombre: req.body.nombre, apellido_paterno: req.body.apellido_paterno, apellido_materno: req.body.apellido_materno, num_documento: req.body.num_documento, direccion: req.body.direccion, telefono: req.body.telefono, email: req.body.email, password: req.body.password });
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
            const reg = await models.Usuario.findByIdAndDelete({ _id: req.query._id });
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
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 1 });
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
            const reg = await models.Usuario.findByIdAndUpdate({ _id: req.body._id }, { estado: 0 });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    },
    login: async (req, res, next) => {
        try {
            let user = await models.Usuario.findOne({ email: req.body.email });
            if (user) {
                if (user.estado == 1) {
                    let match = await bcrypt.compare(req.body.password, user.password);
                    if (match) {
                        let tokenReturn = await token.encode(user._id, user.rol, user.email);
                        res.status(200).json({ user, tokenReturn });
                    } else {
                        res.status(404).send({
                            message: 'Password Incorrecto'
                        });
                    }
                } else
                    res.status(400).send({
                        message: 'Cuenta desactivada'
                    });
            } else {
                res.status(401).send({
                    message: 'No existe usuario'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}