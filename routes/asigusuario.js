import routerx from 'express-promise-router';
import asigUsuarioController from '../controllers/AsigUsuarioController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//router.post('/add',auth.verifyAdministrador,asigUsuarioController.add);
router.post('/add',asigUsuarioController.add);
router.get('/query',asigUsuarioController.query);
router.get('/list',asigUsuarioController.list);
router.get('/listCliente',asigUsuarioController.listCliente);
router.put('/update',asigUsuarioController.update);
router.delete('/remove',asigUsuarioController.remove);
router.put('/activate',asigUsuarioController.activate);
router.put('/desactivate',asigUsuarioController.desactivate);

export default router;