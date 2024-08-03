import React, { useEffect, useState } from 'react';
import './App.css';
import Chessboard from './components/Chessboard';

function App() {
  const [showBoard, setShowBoard] = useState(false);

  useEffect(() => {
    // Simulate a loading animation for 3 seconds before showing the board
    const timer = setTimeout(() => setShowBoard(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showBoard ? (
        <div className="chessboard-container">
          <Chessboard />
        </div>
      ) : (
        <div className="loading-background"></div>
      )}
    </div>
  );
}

export default App;
