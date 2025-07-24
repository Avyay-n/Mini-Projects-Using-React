import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Header from './components/Header';

function App() {
  const [playerNames, setPlayerNames] = useState(() => {
    const savedNames = localStorage.getItem('playerNames');
    if (savedNames) {
      return JSON.parse(savedNames); 
    }
    return { p1: '', p2: '' };
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <Header />
      <main className="w-full max-w-md flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home setPlayerNames={setPlayerNames} />} />
          <Route path="/play" element={<Game playerNames={playerNames} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;