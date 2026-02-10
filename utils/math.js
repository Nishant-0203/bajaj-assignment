// Generate Fibonacci series of length n
const generateFibonacci = (n) => {
  if (n === 0) return [];
  if (n === 1) return [0];
  
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  
  return fib;
};

// Check if number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
};

// Filter prime numbers from array
const filterPrimes = (arr) => {
  return arr.filter(num => isPrime(num));
};

// Calculate GCD of two numbers
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Calculate LCM of two numbers
const lcm = (a, b) => {
  return Math.abs(a * b) / gcd(a, b);
};

// Calculate LCM of array
const calculateLCM = (arr) => {
  return arr.reduce((acc, num) => lcm(acc, num));
};

// Calculate HCF/GCD of array
const calculateHCF = (arr) => {
  return arr.reduce((acc, num) => gcd(acc, num));
};

export {
  generateFibonacci,
  filterPrimes,
  calculateLCM,
  calculateHCF,
  isPrime,
  gcd,
  lcm
};
