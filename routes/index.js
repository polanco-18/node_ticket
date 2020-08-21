import routerx from 'express-promise-router';
import servicioRouter from './servicio'; 
import sedeRouter from './sede'; 
import usuarioRouter from './usuario'; 
import asigUsuarioRouter from './asigUsuario';
import ticketRouter from './ticket'; 
import equipoRouter from './equipo';
import tipoticketRouter from './tipoticket';

const router=routerx();
 //aca declaras las carpetas principales para crear el api rest para postman
 
router.use('/sede',sedeRouter);
router.use('/servicio',servicioRouter);
router.use('/usuario',usuarioRouter);
router.use('/asigUsuario',asigUsuarioRouter);
router.use('/equipo',equipoRouter); 
router.use('/ticket',ticketRouter);
router.use('/tipoticket',tipoticketRouter);
export default router;