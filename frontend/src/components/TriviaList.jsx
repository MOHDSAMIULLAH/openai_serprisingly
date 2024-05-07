// TriviaList.js

import React from "react";
import { useSelector } from "react-redux";

function TriviaList() {
  const {triviaQuestions, loading} = useSelector((state) => state.trivia);
  console.log(triviaQuestions, "triviaQuestions TriviaList");

  const questionsAndAnswers = triviaQuestions?.split("\n\n")
    .map((item, index) => {
      const [question, answer] = item.split("\nAnswer: ");
      return (
        <div key={index}>
          <p>{question}</p>
          <p>
            <strong>Answer:</strong> {answer}
          </p>
        </div>
      );
    });

  return (
    <div className="mt-8">
      {loading && <h2 className="text-2xl mb-4 text-center text-emerald-600 font-bold">loading Questions...</h2>}
      <h2 className="text-2xl font-bold mb-4">Trivia Questions</h2>
      {triviaQuestions !== null ? (
        triviaQuestions.split("\n\n").map((item, index) => {
          const [question, answer] = item.split("\nAnswer: ");
          return (
            <div key={index}>
              <p>{question}</p>
              <p>
                <strong>Answer:</strong> {answer}
              </p>
            </div>
          );
        })
      ) : (
        <p>No trivia questions available.</p>
      )}
    </div>
  );
}

export default TriviaList;
