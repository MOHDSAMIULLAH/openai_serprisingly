// TriviaForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrivia } from '../redux/features/triviaSlice';

function TriviaForm() {
    const [topic, setTopic] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!topic) return;
      dispatch(fetchTrivia(topic));
    };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <input
        type="text"
        placeholder="Enter a topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Generate Trivia
      </button>
    </form>
  );
}

export default TriviaForm;
