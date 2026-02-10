
import { Router } from 'express';
import { getProfile, updateProfile, getHistory, updateHistory } from '../controllers/user';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.get('/history', getHistory);
router.put('/history', updateHistory);

export default router;
