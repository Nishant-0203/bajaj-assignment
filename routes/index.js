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

// GET /bfhl - Info endpoint
router.get('/bfhl', (req, res) => {
  res.status(200).json({
    is_success: true,
    message: 'This is a POST endpoint. Send POST request with appropriate payload.',
    examples: {
      fibonacci: { fibonacci: 5 },
      prime: { prime: [2, 3, 4, 5, 6] },
      lcm: { lcm: [4, 6, 8] },
      hcf: { hcf: [12, 18, 24] },
      AI: { AI: 'Your question here' }
    }
  });
});

// POST /bfhl
router.post('/bfhl', validateBfhlInput, processBfhl);

export default router;
