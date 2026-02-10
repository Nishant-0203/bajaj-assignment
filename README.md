# Chitkara University API Qualifier

REST API implementation for Chitkara University qualifier with mathematical operations and AI integration.

## Features

- ✅ Health check endpoint
- ✅ Fibonacci series generation
- ✅ Prime number filtering
- ✅ LCM calculation
- ✅ HCF/GCD calculation
- ✅ AI integration (Google Gemini)
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled

## Project Structure

```
.
├── server.js
├── routes/
│   └── index.js
├── controllers/
│   └── bfhlController.js
├── middleware/
│   └── validation.js
├── utils/
│   ├── math.js
│   └── ai.js
├── package.json
├── .env.example
├── .env
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm
- Google Gemini API key

### Local Setup

1. **Clone/Download the project**

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` file:
```
PORT=3000
OFFICIAL_EMAIL=yourname@chitkara.edu.in
GEMINI_API_KEY=your_actual_gemini_api_key
```

Get Gemini API key from: https://makersuite.google.com/app/apikey

4. **Start the server**
```bash
npm start
```

Server will run on `http://localhost:3000`

## API Endpoints

### GET /health

**Response:**
```json
{
  "is_success": true,
  "official_email": "yourname@chitkara.edu.in"
}
```

### POST /bfhl

Send EXACTLY ONE operation per request.

#### Fibonacci
**Request:**
```json
{
  "fibonacci": 7
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "yourname@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

#### Prime
**Request:**
```json
{
  "prime": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "yourname@chitkara.edu.in",
  "data": [2, 3, 5, 7, 11]
}
```

#### LCM
**Request:**
```json
{
  "lcm": [12, 15, 20]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "yourname@chitkara.edu.in",
  "data": 60
}
```

#### HCF
**Request:**
```json
{
  "hcf": [12, 18, 24]
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "yourname@chitkara.edu.in",
  "data": 6
}
```

#### AI
**Request:**
```json
{
  "AI": "What is the capital of France?"
}
```

**Response:**
```json
{
  "is_success": true,
  "official_email": "yourname@chitkara.edu.in",
  "data": "Paris"
}
```

## Error Responses

**Invalid Input (400):**
```json
{
  "is_success": false,
  "error": "Error message"
}
```

**Server Error (500):**
```json
{
  "is_success": false,
  "error": "Internal server error"
}
```

## cURL Test Commands

### Health Check
```bash
curl http://localhost:3000/health
```

### Fibonacci
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d "{\"fibonacci\": 7}"
```

### Prime
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d "{\"prime\": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}"
```

### LCM
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d "{\"lcm\": [12, 15, 20]}"
```

### HCF
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d "{\"hcf\": [12, 18, 24]}"
```

### AI
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d "{\"AI\": \"What is the capital of France?\"}"
```

## Deployment to Render

### Step 1: Prepare Git Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Push to GitHub

```bash
git remote add origin https://github.com/yourusername/chitkara-api.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to https://render.com and sign in
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name:** chitkara-qualifier-api
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add Environment Variables:
   - `OFFICIAL_EMAIL`: yourname@chitkara.edu.in
   - `GEMINI_API_KEY`: your_gemini_api_key
6. Click **Create Web Service**

Your API will be live at: `https://your-service-name.onrender.com`

## Postman Collection

```json
{
  "info": {
    "name": "Chitkara Qualifier API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/health",
          "host": ["{{baseUrl}}"],
          "path": ["health"]
        }
      }
    },
    {
      "name": "Fibonacci",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"fibonacci\": 7\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/bfhl",
          "host": ["{{baseUrl}}"],
          "path": ["bfhl"]
        }
      }
    },
    {
      "name": "Prime",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"prime\": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/bfhl",
          "host": ["{{baseUrl}}"],
          "path": ["bfhl"]
        }
      }
    },
    {
      "name": "LCM",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"lcm\": [12, 15, 20]\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/bfhl",
          "host": ["{{baseUrl}}"],
          "path": ["bfhl"]
        }
      }
    },
    {
      "name": "HCF",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"hcf\": [12, 18, 24]\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/bfhl",
          "host": ["{{baseUrl}}"],
          "path": ["bfhl"]
        }
      }
    },
    {
      "name": "AI",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"AI\": \"What is the capital of France?\"\n}"
        },
        "url": {
          "raw": "{{baseUrl}}/bfhl",
          "host": ["{{baseUrl}}"],
          "path": ["bfhl"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:3000",
      "type": "string"
    }
  ]
}
```

Save this as `postman_collection.json` and import into Postman.

## Tech Stack

- Node.js (v18+)
- Express.js
- axios
- dotenv
- cors

## Validation Rules

- Fibonacci: Non-negative integer
- Prime: Array of integers
- LCM: Non-empty array of positive integers
- HCF: Non-empty array of positive integers
- AI: Non-empty string
- Only ONE operation key per request

## License

ISC
