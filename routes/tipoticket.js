import routerx from 'express-promise-router';
import tipoticketController from '../controllers/TipoticketController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx(); 
router.post('/add',auth.verifyAdmin, tipoticketController.add);
router.get('/query',auth.verifyAdmin,tipoticketController.query);
router.get('/list',auth.verifyUsuario,tipoticketController.list);
router.put('/update',auth.verifyAdmin,tipoticketController.update);
router.delete('/remove',auth.verifyAdmin,tipoticketController.remove);

export default router;