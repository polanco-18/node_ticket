import routerx from 'express-promise-router';
import usuarioController from '../controllers/UsuarioController';
//restriccion de rutas
import auth from '../middlewares/auth';

const router=routerx(); 
router.post('/add',auth.verifyAdmin, usuarioController.add);
router.get('/query',auth.verifyAdmin,usuarioController.query);
router.get('/list',auth.verifyUsuario,usuarioController.list);
router.put('/update',auth.verifyAdmin,usuarioController.update);
router.delete('/remove',auth.verifyAdmin,usuarioController.remove);
router.put('/activate',auth.verifyAdmin,usuarioController.activate);
router.put('/desactivate',auth.verifyAdmin,usuarioController.desactivate);
router.post('/login',usuarioController.login);

export default router;
