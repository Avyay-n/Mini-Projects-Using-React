import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../components/Board';

const loadGameState = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved);
  }
  return defaultValue;
};


function Game({ playerNames }) {
  const [history, setHistory] = useState(() => loadGameState('tic-tac-toe-history', [Array(9).fill(null)]));
  const [currentMove, setCurrentMove] = useState(() => loadGameState('tic-tac-toe-move', 0));
  
  const navigate = useNavigate();
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  useEffect(() => {
    localStorage.setItem('tic-tac-toe-history', JSON.stringify(history));
    localStorage.setItem('tic-tac-toe-move', JSON.stringify(currentMove));
  }, [history, currentMove]);

  if (!playerNames.p1 || !playerNames.p2) {
      navigate('/');
      return null;
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    localStorage.removeItem('tic-tac-toe-history');
    localStorage.removeItem('tic-tac-toe-move');
  }

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = `Winner: ${winner === 'X' ? playerNames.p1 : playerNames.p2}`;
  } else if (currentMove === 9) {
    status = "It's a Draw!";
  } else {
    status = `Next player: ${xIsNext ? playerNames.p1 + ' (X)' : playerNames.p2 + ' (O)'}`;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between text-xl font-bold mb-4 px-2">
        <span>{playerNames.p1} (X)</span>
        <span>{playerNames.p2} (O)</span>
      </div>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="mt-6 text-2xl font-semibold m-5">{status}</div>
      {(winner || currentMove === 9) && (
        <button
          onClick={resetGame}
          className="mt-4 py-2 px-6 bg-pink-600 hover:bg-pink-700 rounded-md text-lg font-semibold transition duration-200"
        >
          Play Again
        </button>
      )}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;