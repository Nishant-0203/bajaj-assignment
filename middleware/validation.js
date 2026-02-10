// Validation middleware for POST /bfhl
const validateBfhlInput = (req, res, next) => {
  const body = req.body;
  
  // Check if body is empty
  if (!body || Object.keys(body).length === 0) {
    return res.status(400).json({
      is_success: false,
      error: 'Request body is empty'
    });
  }
  
  // Valid keys
  const validKeys = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
  const receivedKeys = Object.keys(body);
  
  // Check for valid keys
  const validReceivedKeys = receivedKeys.filter(key => validKeys.includes(key));
  
  if (validReceivedKeys.length === 0) {
    return res.status(400).json({
      is_success: false,
      error: 'Missing valid operation key. Expected one of: fibonacci, prime, lcm, hcf, AI'
    });
  }
  
  // Check for multiple keys
  if (validReceivedKeys.length > 1) {
    return res.status(400).json({
      is_success: false,
      error: 'Multiple operation keys found. Only one key is allowed per request'
    });
  }
  
  next();
};

export { validateBfhlInput };
