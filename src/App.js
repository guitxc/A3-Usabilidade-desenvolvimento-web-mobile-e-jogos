import React, { useState } from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="app-container">
      {!startQuiz ? (
        <div className="start-screen">
          <h1 className="title">Bem-vindo ao Quiz!</h1>
          <button className="start-button" onClick={() => setStartQuiz(true)}>
            Jogar
          </button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;
