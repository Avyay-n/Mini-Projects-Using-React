import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from '../components/Board';

function Game({ playerNames }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const navigate = useNavigate();
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

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
      <div className="mt-8 text-2xl font-semibold">{status}</div>
      {(winner || currentMove === 9) && (
        <button
          onClick={resetGame}
          className="m-8 p-2 px-6 bg-pink-600 hover:bg-pink-700 hover:cursor-pointer rounded-md text-lg font-semibold transition duration-200"
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