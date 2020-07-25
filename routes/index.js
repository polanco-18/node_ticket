import routerx from 'express-promise-router';
import sedeRouter from './sede'; 
import usuarioRouter from './usuario';

const router=routerx();
 
router.use('/sede',sedeRouter);
router.use('/usuario',usuarioRouter);
export default router;