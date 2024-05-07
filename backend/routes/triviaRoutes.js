// triviaRoutes.js

const express = require('express');
const router = express.Router();
const triviaController = require('../controllers/triviaController');

router.post('/trivia', triviaController.getTriviaQuestions);

module.exports = router;
