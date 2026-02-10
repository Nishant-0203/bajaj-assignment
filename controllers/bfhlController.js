import { generateFibonacci, filterPrimes, calculateLCM, calculateHCF } from '../utils/math.js';
import { getGeminiAnswer } from '../utils/ai.js';

// GET /health
const healthCheck = (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: process.env.OFFICIAL_EMAIL || 'student@chitkara.edu.in'
  });
};

// POST /bfhl
const processBfhl = async (req, res) => {
  try {
    const body = req.body;
    const officialEmail = process.env.OFFICIAL_EMAIL || 'student@chitkara.edu.in';
    
    // Fibonacci logic
    if ('fibonacci' in body) {
      const n = body.fibonacci;
      
      if (!Number.isInteger(n) || n < 0) {
        return res.status(400).json({
          is_success: false,
          error: 'Fibonacci input must be a non-negative integer'
        });
      }
      
      const result = generateFibonacci(n);
      return res.status(200).json({
        is_success: true,
        official_email: officialEmail,
        data: result
      });
    }
    
    // Prime logic
    if ('prime' in body) {
      const arr = body.prime;
      
      if (!Array.isArray(arr) || !arr.every(x => Number.isInteger(x))) {
        return res.status(400).json({
          is_success: false,
          error: 'Prime input must be an array of integers'
        });
      }
      
      const result = filterPrimes(arr);
      return res.status(200).json({
        is_success: true,
        official_email: officialEmail,
        data: result
      });
    }
    
    // LCM logic
    if ('lcm' in body) {
      const arr = body.lcm;
      
      if (!Array.isArray(arr) || arr.length === 0 || !arr.every(x => Number.isInteger(x) && x > 0)) {
        return res.status(400).json({
          is_success: false,
          error: 'LCM input must be a non-empty array of positive integers'
        });
      }
      
      const result = calculateLCM(arr);
      return res.status(200).json({
        is_success: true,
        official_email: officialEmail,
        data: result
      });
    }
    
    // HCF logic
    if ('hcf' in body) {
      const arr = body.hcf;
      
      if (!Array.isArray(arr) || arr.length === 0 || !arr.every(x => Number.isInteger(x) && x > 0)) {
        return res.status(400).json({
          is_success: false,
          error: 'HCF input must be a non-empty array of positive integers'
        });
      }
      
      const result = calculateHCF(arr);
      return res.status(200).json({
        is_success: true,
        official_email: officialEmail,
        data: result
      });
    }
    
    // AI logic
    if ('AI' in body) {
      const question = body.AI;
      
      if (typeof question !== 'string' || question.trim().length === 0) {
        return res.status(400).json({
          is_success: false,
          error: 'AI input must be a non-empty string'
        });
      }
      
      try {
        const answer = await getGeminiAnswer(question);
        return res.status(200).json({
          is_success: true,
          official_email: officialEmail,
          data: answer
        });
      } catch (error) {
        return res.status(500).json({
          is_success: false,
          error: 'AI service error: ' + error.message
        });
      }
    }
    
    // No valid key found (should not reach here due to validation middleware)
    return res.status(400).json({
      is_success: false,
      error: 'No valid operation key found'
    });
    
  } catch (error) {
    console.error('Error in processBfhl:', error);
    return res.status(500).json({
      is_success: false,
      error: 'Server error processing request'
    });
  }
};

export { healthCheck, processBfhl };
