import routerx from 'express-promise-router';
import tipoticketController from '../controllers/TipoticketController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//router.post('/add',auth.verifyAlmacenero,tipoticketController.add);
router.post('/add',tipoticketController.add);
router.get('/query',tipoticketController.query);
router.get('/list',tipoticketController.list);
router.put('/update',tipoticketController.update);
router.delete('/remove',tipoticketController.remove);

export default router;