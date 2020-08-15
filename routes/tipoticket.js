import routerx from 'express-promise-router';
import sedeController from '../controllers/TicketController';
//restriccion de rutas
import auth from '../middlewares/auth';
import TipoTicketController from '../controllers/TipoTicketController';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//normales

router.post('/add',TipoTicketController.add);
router.get('/query',TipoTicketController.query);
router.get('/list',TipoTicketController.list);
router.put('/update',TipoTicketController.update);
router.delete('/remove',TipoTicketController.remove); 
export default router;
