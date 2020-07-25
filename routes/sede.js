import routerx from 'express-promise-router';
import sedeController from '../controllers/SedeController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//router.post('/add',auth.verifyAlmacenero,sedeController.add);
router.post('/add',sedeController.add);
router.get('/query',sedeController.query);
router.get('/list',sedeController.list);
router.put('/update',sedeController.update);
router.delete('/remove',sedeController.remove);
router.put('/activate',sedeController.activate);
router.put('/desactivate',sedeController.desactivate);

export default router;
