import express from 'express';
import { healthCheck, processBfhl } from '../controllers/bfhlController.js';
import { validateBfhlInput } from '../middleware/validation.js';

const router = express.Router();

// GET / - Root endpoint
router.get('/', (req, res) => {
  res.status(200).json({
    is_success: true,
    message: 'BFHL API is running',
    endpoints: {
      health: 'GET /health',
      bfhl: 'POST /bfhl'
    }
  });
});

// GET /health
router.get('/health', healthCheck);

// POST /bfhl
router.post('/bfhl', validateBfhlInput, processBfhl);

export default router;
