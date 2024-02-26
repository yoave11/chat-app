import express from 'express';
import { getSampleData } from '../controllers/conversationController';

const router = express.Router();

router.get('/sample', getSampleData);

export default router;
