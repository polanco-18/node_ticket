import routerx from 'express-promise-router';
import sedeRouter from './sede'; 
import usuarioRouter from './usuario';

const router=routerx();
 //aca declaras las carpetas principales para crear el api rest para postman
 
router.use('/sede',sedeRouter);
router.use('/servicio',servicioRouter);
router.use('/usuario',usuarioRouter);
router.use('/equipo',equipoRouter);
router.use('/asigusuario',asigusuarioRouter);
router.use('/ticket',ticketRouter);
router.use('/tipoticket',tipoticketRouter);
router.use('/detalleticket',detalleticketRouter);
export default router;
