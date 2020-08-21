import routerx from 'express-promise-router';
import servicioController from '../controllers/ServicioController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx(); 
router.post('/add',auth.verifyAdmin, servicioController.add);
router.get('/query',auth.verifyAdmin,servicioController.query);
router.get('/list',auth.verifyUsuario,servicioController.list);
router.put('/update',auth.verifyAdmin,servicioController.update);
router.delete('/remove',auth.verifyAdmin,servicioController.remove); 
router.put('/activate',auth.verifyAdmin,servicioController.activate);
router.put('/desactivate',auth.verifyAdmin,servicioController.desactivate);

export default router;
