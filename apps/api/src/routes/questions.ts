
import { Router } from 'express';
import { getQuestionBanks, getQuestionBank } from '../controllers/questions';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.get('/', getQuestionBanks);
router.get('/:id', getQuestionBank);

export default router;
