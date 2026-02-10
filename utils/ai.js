import axios from 'axios';

// Get one-word answer from Google Gemini API
const getGeminiAnswer = async (question) => {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY not configured');
  }
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
  
  const prompt = `Answer the following question with ONLY ONE WORD. Do not provide any explanation, punctuation, or additional text. Just the answer word.\n\nQuestion: ${question}`;
  
  try {
    const response = await axios.post(url, {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });
    
    if (response.data && 
        response.data.candidates && 
        response.data.candidates[0] && 
        response.data.candidates[0].content && 
        response.data.candidates[0].content.parts && 
        response.data.candidates[0].content.parts[0]) {
      
      let answer = response.data.candidates[0].content.parts[0].text.trim();
      
      // Extract only the first word
      answer = answer.split(/\s+/)[0];
      
      // Remove any trailing punctuation
      answer = answer.replace(/[.,!?;:]$/, '');
      
      return answer;
    }
    
    throw new Error('Invalid response from Gemini API');
    
  } catch (error) {
    if (error.response) {
      throw new Error(`Gemini API error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      throw new Error('No response from Gemini API');
    } else {
      throw new Error(error.message);
    }
  }
};

export { getGeminiAnswer };
