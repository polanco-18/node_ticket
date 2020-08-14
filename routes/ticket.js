import routerx from 'express-promise-router';
import sedeController from '../controllers/TicketController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router=routerx();
//normales
router.post('/add',ticketController.add);
router.put('/update',ticketController.update);
router.get('/query',ticketController.query);
router.get('/list',ticketController.list);
//extras
router.get('/listsede',ticketController.listsede);
export default router;
