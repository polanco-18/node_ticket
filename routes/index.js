import routerx from 'express-promise-router';
import sedeRouter from './sede'; 
import usuarioRouter from './usuario';

const router=routerx();
 //aca declaras las carpetas principales para crear el api rest para postman
 
router.use('/sede',sedeRouter);
router.use('/usuario',usuarioRouter);
export default router;