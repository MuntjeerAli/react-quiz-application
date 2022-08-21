import React, {useState} from 'react';

const App = () => {
  const [gameState, useGameState] = useState("menu");
  return (
    <div className='App'>
      <h1>Quiz App</h1>
    </div>
  )
}

export default App
