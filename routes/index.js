import routerx from 'express-promise-router';
import servicioRouter from './servicio'; 
import sedeRouter from './sede'; 
import usuarioRouter from './usuario'; 
import ticketRouter from './ticket'; 
import equipoRouter from './equipo';

const router=routerx();
 //aca declaras las carpetas principales para crear el api rest para postman
 
router.use('/sede',sedeRouter);
router.use('/servicio',servicioRouter);
router.use('/usuario',usuarioRouter);
router.use('/equipo',equipoRouter); 
router.use('/ticket',ticketRouter); 
export default router;