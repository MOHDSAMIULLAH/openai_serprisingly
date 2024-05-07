// triviaController.js

const { generateTriviaQuestions } = require('../services/openaiService');

async function getTriviaQuestions(req, res) {
  const { topic } = req.body;
  
  try {
    const triviaQuestions = await generateTriviaQuestions(topic);
    res.json({ triviaQuestions });
  } catch (error) {
    console.error('Error generating trivia questions:', error);
    res.status(500).json({ error: 'Failed to generate trivia questions' });
  }
}

module.exports = { getTriviaQuestions };
