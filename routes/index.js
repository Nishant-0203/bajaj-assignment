import express from 'express';
import { healthCheck, processBfhl } from '../controllers/bfhlController.js';
import { validateBfhlInput } from '../middleware/validation.js';

const router = express.Router();

// GET /health
router.get('/health', healthCheck);

// POST /bfhl
router.post('/bfhl', validateBfhlInput, processBfhl);

export default router;
