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
        if (response.rol == 'admin' || response.rol == 'Vendedor' || response.rol == 'Almacenero') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            });
        }
    },
    verifyAdministrador: async (req, res, next) => {
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
    }
}