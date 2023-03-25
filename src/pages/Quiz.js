import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // fetch questions data from server
    fetch('/api/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle quiz submission
  }

  return (
    <div>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map(question => (
          <div key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.description}</p>
            {question.options.map(option => (
              <div key={option.id}>
                <input type="radio" name={question.id} value={option.id} />
                <label>{option.title}</label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Quiz;
