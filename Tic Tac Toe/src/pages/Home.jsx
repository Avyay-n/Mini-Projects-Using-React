import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ setPlayerNames }) {
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const navigate = useNavigate();

  const handlePlayClick = () => {
    if (p1 && p2) {
      const newPlayerNames = { p1, p2 };
      setPlayerNames(newPlayerNames);
      localStorage.setItem('playerNames', JSON.stringify(newPlayerNames));

      localStorage.removeItem('tic-tac-toe-history');
      localStorage.removeItem('tic-tac-toe-move');

      navigate('/play');
    } else {
      alert('Please enter names for both players.');
    }
  };

  return (
    <div className="w-full bg-gray-800 p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl text-center font-bold mb-6 text-gray-200">Enter Player Names</h2>
      <div className="w-full space-y-4">
        <input
          type="text"
          placeholder="Player 1 Name"
          value={p1}
          onChange={(e) => setP1(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Player 2 Name"
          value={p2}
          onChange={(e) => setP2(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button
        onClick={handlePlayClick}
        className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-lg font-semibold transition duration-200"
      >
        Play
      </button>
    </div>
  );
}

export default Home;