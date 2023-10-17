import express from 'express';
import { getDate } from '../controllers/TimeController';

const router = express.Router();

router.get('/:date?', getDate);

export default router;