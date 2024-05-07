// openaiService.js

const axios = require('axios');

const OpenAI = require('openai')
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
async function generateTriviaQuestions(topic) {
  try {
    const prompt = `Generate trivia questions with answer about ${topic}.`;
  
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [{ role: "user", content: prompt }],    
    });
  
    const triviaQuestions = response.choices[0].message.content;
    console.log(triviaQuestions,"triviaQuestions from chatgpt")
    return triviaQuestions;
  } catch (error) {
    throw new Error('Failed to generate trivia questions');
  }
}

module.exports = { generateTriviaQuestions };
