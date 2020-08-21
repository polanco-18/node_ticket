import routerx from 'express-promise-router';
import sedeController from '../controllers/SedeController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx(); 
router.post('/add',auth.verifyAdmin, sedeController.add);
router.get('/query',auth.verifyAdmin,sedeController.query);
router.get('/list',auth.verifyUsuario,sedeController.list);
router.put('/update',auth.verifyAdmin,sedeController.update);
router.delete('/remove',auth.verifyAdmin,sedeController.remove);
router.put('/activate',auth.verifyAdmin,sedeController.activate);
router.put('/desactivate',auth.verifyAdmin,sedeController.desactivate);

export default router;
