import React, { useState } from 'react';
import Square from './Square';
import '../styles/Chessboard.css';

const Chessboard = () => {
  const [redSquares, setRedSquares] = useState(new Set());
  const [history, setHistory] = useState([]);
  const [clickedSquare, setClickedSquare] = useState(null);

  const handleSquareClick = (row, col) => {
    const newRedSquares = new Set();
    for (let i = 0; i < 8; i++) {
      if (row + i < 8 && col + i < 8) newRedSquares.add(`${row + i}-${col + i}`);
      if (row + i < 8 && col - i >= 0) newRedSquares.add(`${row + i}-${col - i}`);
      if (row - i >= 0 && col + i < 8) newRedSquares.add(`${row - i}-${col + i}`);
      if (row - i >= 0 && col - i >= 0) newRedSquares.add(`${row - i}-${col - i}`);
    }
    setHistory([...history, redSquares]);
    setRedSquares(newRedSquares);
    setClickedSquare(`${row}-${col}`);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previous = history.pop();
      setRedSquares(previous);
      setHistory(history);
    }
  };

  const board = [];
  for (let row = 0; row < 8; row++) {
    const squares = [];
    for (let col = 0; col < 8; col++) {
      const isWhite = (row + col) % 2 === 0;
      squares.push(
        <Square
          key={`${row}-${col}`}
          isWhite={isWhite}
          isRed={redSquares.has(`${row}-${col}`)}
          isClicked={clickedSquare === `${row}-${col}`}
          row={row}
          col={col}
          onClick={handleSquareClick}
        />
      );
    }
    board.push(
      <div key={row} className="row">
        {squares}
      </div>
    );
  }

  return (
    <div className="chessboard-container">
      <h1>Chessboard</h1>
      <div className="chessboard">{board}</div>
      <button className="undo-button" onClick={handleUndo}>Undo</button>
    </div>
  );
};

export default Chessboard;
