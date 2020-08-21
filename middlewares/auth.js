import tokenService from '../services/token';
export default {
    //metodos que consumen el servio/token que valida que la sesion no pase de 1Hora
    verifyUsuario: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'admin' || response.rol == 'cliente' || response.rol == 'tecnico') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdmin: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'admin') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyCliente: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'cliente') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyCoordinador: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'tecnico') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    }
}