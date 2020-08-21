import routerx from 'express-promise-router';
import ticketController from '../controllers/TicketController';
//restriccion de rutas
import auth from '../middlewares/auth';
//aca declaras las rutas y llamas al metodo en controllers
const router = routerx();
//normales
router.post('/add', auth.verifyUsuario, ticketController.add);
router.put('/update', auth.verifyUsuario, ticketController.update);
router.get('/query', auth.verifyUsuario, ticketController.query);
router.get('/list', auth.verifyUsuario, ticketController.list);
export default router;
