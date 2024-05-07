// api.js

import axios from 'axios';
const BASE_URL = "https://openai-serprisingly-1.onrender.com"
export async function fetchTriviaQuestions(topic) {
  try {
    const response = await axios.post(`${BASE_URL}/v2/api/trivia`, { topic });    
    console.log('Trivia questions:', response.data);
    return response;
  } catch (error) {
    throw new Error('Failed to fetch trivia questions');
  }
}
