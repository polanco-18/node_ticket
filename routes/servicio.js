import routerx from 'express-promise-router';
import servicioController from '../controllers/ServicioController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//router.post('/add',auth.verifyAlmacenero,servicioController.add);
router.post('/add',servicioController.add);
router.get('/query',servicioController.query);
router.get('/list',servicioController.list);
router.put('/update',servicioController.update);
router.delete('/remove',servicioController.remove); 

export default router;
