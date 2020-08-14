import routerx from 'express-promise-router';
import equipoController from '../controllers/EquipoController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//router.post('/add',auth.verifyAdministrador,equipoController.add);
router.post('/add',equipoController.add);
router.get('/query',equipoController.query);
router.get('/list',equipoController.list);
router.put('/update',equipoController.update);
router.delete('/remove',equipoController.remove);
router.put('/activate',equipoController.activate);
router.put('/desactivate',equipoController.desactivate);

export default router;
