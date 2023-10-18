import express from 'express';
import { getDate } from '../controllers/TimeController.js';

const router = express.Router();

router.get('/:date?', getDate);

export default router;