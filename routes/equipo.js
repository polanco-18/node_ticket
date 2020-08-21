import routerx from 'express-promise-router';
import equipoController from '../controllers/EquipoController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//router.post('/add',auth.verifyAdministrador,equipoController.add);
router.post('/add',auth.verifyAdmin, equipoController.add);
router.get('/query',auth.verifyAdmin,equipoController.query);
router.get('/list',auth.verifyUsuario,equipoController.list);
router.put('/update',auth.verifyAdmin,equipoController.update);
router.delete('/remove',auth.verifyAdmin,equipoController.remove);
router.put('/activate',auth.verifyAdmin,equipoController.activate);
router.put('/desactivate',auth.verifyAdmin,equipoController.desactivate);

export default router;
