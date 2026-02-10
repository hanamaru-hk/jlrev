
import { Router } from 'express';
import { googleLogin } from '../controllers/auth';

const router = Router();

router.post('/google', googleLogin);

export default router;
