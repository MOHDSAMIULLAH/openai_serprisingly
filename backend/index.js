
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const triviaRoutes = require('./routes/triviaRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

// import OpenAI from "openai";
const OpenAI = require('openai')
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Routes
app.use('/v2/api', triviaRoutes);

// API endpoint for generating trivia questions
app.post('/v1/api/trivia', async (req, res) => {
  const { topic } = req.body;
  
  try {
    const triviaQuestions = await generateTriviaQuestions(topic);
  
    res.json({ triviaQuestions });
  } catch (error) {
    // Handle errors
    console.error('Error generating trivia questions:', error);
    res.status(500).json({ error: 'Failed to generate trivia questions' });
  }
});


async function generateTriviaQuestions(topic) {
  const prompt = `Generate trivia questions with answer about ${topic}.`;
  
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", 
    messages: [{ role: "user", content: prompt }],    
  });

  const triviaQuestions = response.choices[0].message.content;
  console.log(triviaQuestions,"triviaQuestions from chatgpt")
  return triviaQuestions;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
